import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
    winter: "winter",
    dracula: "dracula"
}

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem("theme") || themes.winter
    document.documentElement.setAttribute("data-theme", theme)
    return theme
}

const initialState = {
    user: { username: "guest" },
    theme: getThemeFromLocalStorage(),
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action.payload);
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
            toast.success('Logged out successfully!');
        },
        changeTheme: (state, action) => {
            const { winter, dracula } = themes
            state.theme = state.theme === winter ? dracula : winter
            document.documentElement.setAttribute("data-theme", state.theme)
            localStorage.setItem("theme", state.theme)
        },
    }
});

export const { login, logout, changeTheme } = userSlice.actions;

export default userSlice.reducer;