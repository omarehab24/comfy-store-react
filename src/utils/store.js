import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice.js";
import userReducer from "../features/user/userSlice.js";

export const store = configureStore({
    reducer: {
        cartState: cartReducer,
        userState: userReducer
    }
});