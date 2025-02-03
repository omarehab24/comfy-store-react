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

const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
        },
        clearCart: (state) => {},
        removeItem: (state, action) => {},
        editItem: (state, action) => {},
    },
});

export const { addToCart, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;

