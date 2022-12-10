import { createSlice } from '@reduxjs/toolkit'


const getCartFormLocal = () => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : localStorage.setItem('cart', JSON.stringify([]))
    return cart
}

const initialState = {
    isLoading: false,
    cartItems: getCartFormLocal() || [],
    amount: 0,
    total: 0,
}


// console.log(initialState)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartItemsChange: (state, { payload }) => {
            const newCart = JSON.parse(localStorage.getItem('cart'))
            state.cartItems = newCart
        },
        countTotal: (state) => {
            const items = state.cartItems
            if (items.length > 0) {
                let count = items.reduce((acc, curr) => {
                    acc.total += Number(curr.amount) * Number(curr.price)
                    acc.amount += Number(curr.amount)
                    return acc
                }, { total: 0, amount: 0 })
                state.amount = count.amount
                state.total = count.total
            }
            if (items.length < 1) {
                state.amount = 0
                state.total = 0
            }
        },
    }
})

export const { cartItemsChange, countTotal, changeAmount } = cartSlice.actions


export default cartSlice.reducer