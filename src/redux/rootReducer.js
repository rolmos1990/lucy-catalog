import { combineReducers } from '@reduxjs/toolkit';
import productSlice from './features/product-slice';
import categorySlice from './features/category-slice';

const rootReducer = combineReducers({
  products:productSlice,
  category: categorySlice
})

export default rootReducer;
