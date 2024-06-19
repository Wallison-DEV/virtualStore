import { configureStore } from '@reduxjs/toolkit'

import authReducer from './reducers/authentication'
import api from '../Services/api'
import authenticationMiddleware from './middlewares/authenticationMiddleware'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware)=> 
        getDefaultMiddleware().concat(api.middleware).concat(authenticationMiddleware),
})

export type RootReducer = ReturnType<typeof store.getState>;