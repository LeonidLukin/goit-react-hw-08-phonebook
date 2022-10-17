import { createSlice } from "@reduxjs/toolkit";
import authOperations from './auth-operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
    user: {name: null, email: null },
    token: null,
    isLoggedIn: false,
}

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action){
            // под капотом IMMER . не мутируется state напрямую, меняется копия state
            state.user = action.payload.user;
            state.user = action.payload.token;
            state.isLoggedIn = true;
        }
    },
});
export const persisteAuthReducer = persistReducer(
    authPersistConfig,
    authSlice.reducer,
  );

export default authSlice.reducer;