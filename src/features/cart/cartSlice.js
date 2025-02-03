import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart')) || defaultState
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: getCartFromLocalStorage(),
    reducers: {
        addItem: (state, action) => {
            const { product } = action.payload;
            const item = state.cartItems.find((item) => item.cartID === product.cartID);
            
            if (item) {
                item.amount += product.amount;
            } else {
                state.cartItems.push(product);
            }
            state.numItemsInCart += product.amount;
            state.cartTotal += product.price * product.amount;
            cartSlice.caseReducers.calculateCartTotal(state);
            toast.success('Item added to cart!');
        },
        clearCart: (state) => {},
        removeItem: (state, action) => {},
        editItem: (state, action) => {},
        calculateCartTotal: (state) => {
            state.tax = state.cartTotal * 0.1;
            state.orderTotal = state.cartTotal + state.tax + state.shipping;
            localStorage.setItem('cart', JSON.stringify(state));
        },
    },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;

