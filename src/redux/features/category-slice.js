import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CategoryDataService from "../services/category.service";

const initialState = {
    loading: false,
    items: [],
    item: {}
};

export const retrieveCategory = createAsyncThunk(
    "category/retrieve",
    async () => {
        const res = await CategoryDataService.getAll();
        return res.data.data;
    }
);


export const getCategory = createAsyncThunk(
    "category/get",
    async ({category}) => {
        const res = await CategoryDataService.get(category);
        return res.data;
    }
);


const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        clear_category: (state) => {
            state.item = null;
        },
    },
    extraReducers: {
        [retrieveCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [retrieveCategory.fulfilled]: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        [getCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [getCategory.fulfilled]: (state, action) => {
            state.loading = false;
            state.item = action.payload;
        },
        [getCategory.rejected]: (state, action) => {
            state.loading = false;
        }
    },
});


export const { clear_category } = categorySlice.actions;

export default categorySlice.reducer;
