import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductDataService from "../services/product.service";

const initialState = {
  loading: false,
  items: [],
  item: null
};

export const retrieveProduct = createAsyncThunk(
    "product/retrieve",
    async ({category, limit, page}) => {
      const res = await ProductDataService.getAll(category, limit, page);
      return res.data.data;
    }
);


export const getProduct = createAsyncThunk(
    "product/get",
    async ({product}) => {
      const res = await ProductDataService.get(product);
      return res.data;
    }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clear_product: (state) => {
      state.item = null;
    },
  },
  extraReducers: {
    [retrieveProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [retrieveProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = [...state.items, ...action.payload];
    },
    [retrieveProduct.rejected]: (state, action) => {
      state.loading = false;
    },
    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.item = action.payload;
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
    }
  },
});

export const { clear_product } = productSlice.actions;

export default productSlice.reducer;
