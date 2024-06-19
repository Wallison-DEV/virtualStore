import { createSlice  } from '@reduxjs/toolkit'

type AuthenticationProps = {
    isAuthenticated: boolean, 
    checkAuth: Boolean
}

const initialState: AuthenticationProps = {
    isAuthenticated: false,
    checkAuth: false
}

const AuthenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        toggleCheckAuth(state) {
            state.checkAuth = !state.checkAuth;
        },
        authenticationSuccess(state) {
            state.isAuthenticated = true;
        },
        authenticationFailed(state) {
            state.isAuthenticated = false;
        },
    }
})

export const { toggleCheckAuth, authenticationFailed, authenticationSuccess } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer