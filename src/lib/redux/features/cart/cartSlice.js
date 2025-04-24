import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const submitOrder = createAsyncThunk(
    'submitOrder/POST',
    async (data, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.post('/public/order/create', data);
        if(response.data.status == false){
            return rejectWithValue(response.data.error); 
        }
        return response.data;

      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
        tax:0,
        deliveryOption:{
            deliveryTime:"",
            id: "",
            name: "",
            price:0
        },
        currentItemQuentity: 1,
        orderRequest:{
                        status: 'idle',
                        error: null
                    }
    },
    reducers: {
        addToCart(state, action) {

            const newItem = action.payload;
            const totalAdjustPrice = newItem.is_discount == 1 
                                        ? (newItem.price - newItem.discount_amount) * state.currentItemQuentity
                                        : newItem.price  * state.currentItemQuentity
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += state.currentItemQuentity;
                existingItem.totalItemPrice += totalAdjustPrice

            } else {
                state.items.push({ ...newItem, 
                    quantity: state.currentItemQuentity,
                    totalItemPrice: totalAdjustPrice
                
                });                
            }
            state.totalQuantity += state.currentItemQuentity;
            state.totalPrice += totalAdjustPrice
        },
        removeFromCart(state, action) {

            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                // state.totalPrice -= existingItem.price * existingItem.quantity;
                state.totalPrice -= existingItem.totalItemPrice;

                state.items = state.items.filter(item => item.id !== id);
            }  
            state.currentItemQuentity = 1          
        },
        incrementCurrentQuantity(state, action){
            state.currentItemQuentity++
        },
        decrementCurrentQuantity(state, action){
            if(state.currentItemQuentity > 1){
                state.currentItemQuentity--
            }
        },
        incrementQuentity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            const incrementAmount = existingItem.is_discount == 1 
                                        ? existingItem.price - existingItem.discount_amount
                                        : existingItem.price

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalItemPrice += incrementAmount;
                state.totalQuantity++;
                state.totalPrice += incrementAmount;
            }
        },
        decrementQuentity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            const deductAmount = existingItem.is_discount == 1 
                                        ? existingItem.price - existingItem.discount_amount
                                        : existingItem.price
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
                existingItem.totalItemPrice -= deductAmount;
                state.totalQuantity--;
                state.totalPrice -= deductAmount;
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
            state.tax=0
            state.deliveryOption={
                deliveryTime:"",
                id: "",
                name: "",
                price:0
            };
        },
        setDeliveryOption(state, action){
            state.deliveryOption = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase('persist/REHYDRATE', (state, action) => {
                // Recalculate totals when cart is rehydrated
                if (action.payload?.cart?.items) {
                    state.totalQuantity = action.payload.cart.items.reduce(
                    (total, item) => total + item.quantity, 0
                    );
                    state.totalPrice = action.payload.cart.items.reduce(
                    (total, item) => total + (item.price * item.quantity), 0
                    );
                    }
                })
            .addCase(submitOrder.pending, (state) => {
                state.orderRequest.status = 'loading';
            })
            .addCase(submitOrder.fulfilled, (state, action) => {
                state.orderRequest.status = 'succeeded';
                state.items = [];
                state.totalQuantity = 0;
                state.totalPrice = 0;
                state.tax = 0;
                state.currentItemQuentity = 1;
                state.deliveryOption= {     deliveryTime:"",
                                            id: "",
                                            name: "",
                                            price:0     };
                state.orderRequest.error = null;
            })
            .addCase(submitOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.orderRequest.error = action.payload?.message || 'Failed to submit cart';
            });
            
      }
})

export const { addToCart, removeFromCart, incrementQuentity, decrementQuentity, clearCart, setDeliveryOption, incrementCurrentQuantity, decrementCurrentQuantity } = cartSlice.actions;
export default cartSlice.reducer;