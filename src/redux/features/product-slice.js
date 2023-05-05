import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductDataService from "../services/product.service";

const initialState = {
  loading: false,
  items: [],
  item: null,
  meta: {},
  offset: -1,
  reset: false
};

export const retrieveProduct = createAsyncThunk(
    "product/retrieve",
    async ({category, limit, page}) => {
      const res = await ProductDataService.getAll(category, limit, page);
      return {data: res.data.data, meta: res.data.meta};
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
    clear_products: (state) => {
      state.item = null;
      state.items = [];
      state.scroll = 0;
      state.loading = false;
      state.meta = {};
      state.reset = !state.reset;
      state.offset = -1;
    },
    set_offset: (state, action) => {
      state.offset = action.payload.offset;
    },
    scroll_saved: (state, action) => {
      console.log('saved scroll: ', action.payload.scroll);
      state.scroll = action.payload.scroll;
    },
  },
  extraReducers: {
    [retrieveProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [retrieveProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = [...state.items, ...action.payload.data];
      state.meta = action.payload.meta;
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

export const { clear_product, set_offset, scroll_saved, clear_products } = productSlice.actions;

export default productSlice.reducer;
