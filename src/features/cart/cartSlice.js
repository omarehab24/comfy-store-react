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
        clearCart: () => {
            localStorage.setItem('cart', JSON.stringify(defaultState));
            return defaultState
        },
        removeItem: (state, action) => {
            const { cartID } = action.payload;
            const product = state.cartItems.find((item) => item.cartID === cartID);
            state.cartItems = state.cartItems.filter((item) => item.cartID !== cartID);
            state.numItemsInCart -= product.amount;
            state.cartTotal -= product.price * product.amount;
            cartSlice.caseReducers.calculateCartTotal(state);
            toast.error('Item removed from cart!'); // chosen to use toast.error just for the color (red) not an actual error
        },
        editItem: (state, action) => {
            const { cartID, amount } = action.payload;
            const product = state.cartItems.find((item) => item.cartID === cartID);
            // amount is the new quantity the user wants
            // product.amount is the current quantity in the cart
            // amount - product.amount gives us the difference
            // e.g.
            // If changing from 2 items to 5: 5 - 2 = +3 (adding 3 to total)
            // If changing from 5 items to 2: 2 - 5 = -3 (subtracting 3 from total)
            state.numItemsInCart += amount - product.amount;
            // e.g.
            // Changing from 2 to 5: $10 * (5 - 2) = $10 * 3 = +$30
            state.cartTotal += product.price * (amount - product.amount);
            product.amount = amount;
            cartSlice.caseReducers.calculateCartTotal(state);
            toast.success('Cart updated!');
        },
        calculateCartTotal: (state) => {
            state.tax = state.cartTotal * 0.1;
            state.orderTotal = state.cartTotal + state.tax + state.shipping;
            localStorage.setItem('cart', JSON.stringify(state));
        },
    },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;

