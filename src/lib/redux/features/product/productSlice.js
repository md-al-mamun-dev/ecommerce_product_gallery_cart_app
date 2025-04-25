import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axios";

export const fetchProducts = createAsyncThunk("product/GET", 
  async (payload = {}, { rejectWithValue }) => {
    const { path } = payload;
    try {
      // const response = await axiosInstance.get( path || '/all/product/get');
      // return response.data.data;

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api${path}`, {
        next: { revalidate: 300 }, 
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      });
      if (!res.ok) throw new Error("Failed to fetch products");
      const result = await res.json();
      return result.data

    } catch (error) {
      console.error("Error fetching products:", error);
      return rejectWithValue(error.response?.data || error.message || 'Error fetching products');
    }
});

export const fetchProductDetails = createAsyncThunk( "productDetails/GET", 
  async (payload, { rejectWithValue }) => {
    try {
      let url = '/all/product/get';
      let product = null;

      do {
        // code using axios
        // const response = await axiosInstance.get(url);        
        // if (response.status === 200) {
        //   const { data, next_page_url } = response.data.data;
        // } else {
        //   url = null
        //   return rejectWithValue('Error fetching product details');
        // }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api${url}`, {
          next: { revalidate: 300 }, 
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          }
        });
        if (!res.ok) {
          url = null
          return rejectWithValue('Error fetching product details');
        }else{
          const result = await res.json();
          const { data, next_page_url } = result.data;
          product = data.find(item => item.id == payload);
          if (product) {
            url = null
            return product;
            break
          }
          url = next_page_url;
        }
      } while (url);

      return rejectWithValue('Product not found');
    } catch (error) {
      console.error('Fetch error:', error);
      return rejectWithValue('An error occurred while fetching the product');
    }
  }
);

export async function fetchProductById(productId) {
  const response = await axiosInstance.get('/all/product/get');
  const products =  response.data.data.data;
  return products.find((product) => product.id == productId);
}

const productSlice = createSlice({
  name: "product",
  initialState: { data:{},
                  product:{},
                  loading: false,
                  error: null},
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
      })

      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },  
});

export default productSlice.reducer;
