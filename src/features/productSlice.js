import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    isLoading: false,
    allProduct: [],
    activePage: 1,
    category: 'all',
    search: '',
    totalProduct: 0,
    numOfPages: 0,
    sort: '',
}



export const getAllProducts = createAsyncThunk('products/getAllProducts', async (_, thunkAPI) => {

    const { activePage, category, search, sort } = thunkAPI.getState().products
    let url = `https://oldstuffserver.herokuapp.com/api/v1/all-products?page=${activePage}&category=${category}&sort=${sort}`
    if (search.length >= 1) {
        url = `${url}&search=${search}`
    }
    try {
        const resp = await axios.get(url)
        console.log(resp.data)
        return resp.data
    } catch (error) {
        console.log(error)
    }
})


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeActivePage: (state, action) => {
            state.activePage = action.payload
        },
        categoryFilter: (state, { payload }) => {
            state.category = payload
        },
        searchFilter: (state, { payload }) => {
            state.search = payload
        },
        clearFilter: (state) => {
            state.category = 'all'
            state.search = ''
            state.sort = ''
            state.activePage = 1
        },
        sortFilter: (state, { payload }) => {
            state.sort = payload
        }

    },
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllProducts.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.allProduct = payload.product
            state.totalProduct = payload.totalProduct
            state.numOfPages = payload.numOfPages
        },
        [getAllProducts.rejected]: (srate) => {
            srate.isLoading = false;
        }
    }
})


export const { changeActivePage, categoryFilter, clearFilter, searchFilter, sortFilter } = productSlice.actions

export default productSlice.reducer

