import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axios";

export const fetchProducts = createAsyncThunk("product/GET", async (payload = {}) => {
    const { path } = payload;    
    const response = await axiosInstance.get( path || '/all/product/get');
    return response.data.data;  
});

export async function fetchProductById(productId) {
  const response = await axiosInstance.get('/all/product/get');
  const products =  response.data.data.data;
  return products.find((product) => product.id == productId);
}

const productSlice = createSlice({
  name: "product",
  initialState: { data: [],
                  loading: false,
                  error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },  

});

export default productSlice.reducer;
