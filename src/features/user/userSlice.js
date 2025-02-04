import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    user: {username: "guest"},
    theme: 'dracula',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log('log in user');
        },
        logout: (state) => {
            console.log('log out user');
        },
        changeTheme: (state, action) => {
            console.log('change theme');
        },
    }
});

export const { login, logout, changeTheme } = userSlice.actions;

export default userSlice.reducer;