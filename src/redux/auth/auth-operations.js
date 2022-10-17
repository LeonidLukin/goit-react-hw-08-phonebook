import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com'

axios.defaults.baseURL = `${BASE_URL}`

const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const {data} = await axios.post('/users/signup', credentials);
        return data;
    } catch (error) {
        console.log(error);
        // добавляем обработку ошибок error.message
    }
});

const login = createAsyncThunk('auth/login', async credentials => {
    try {
    const {data} = await axios.post('users/login', credentials);
    return data;        
    } catch (error) {
        // добавляем обработку ошибок error.message
    }
})

const authOperations = {
    register,
    login,
};

export default authOperations;