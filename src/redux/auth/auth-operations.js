import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com'

axios.defaults.baseURL = `${BASE_URL}`

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
      console.log(error);
      // добавляем обработку ошибок error.message
    }
});

const login = createAsyncThunk('auth/login', async credentials => {
    try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;        
    } catch (error) {
      // добавляем обработку ошибок error.message
    }
})

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
      try {
        const { data } = axios.post(`/users/logout`);
        token.unset();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, { getState, rejectWithValue }) => {
      const state = getState();
      const persistToken = state.auth.token;
  
      if (persistToken === null) {
        console.log('NO token');
        return rejectWithValue();
        // тут не можем просто return -  возвращаем и записываем undefined, а так прокидываем ошибку
      }
  
      token.set(persistToken);
  
      try {
        return axios.get(`/users/current`).then(({ data }) => {
          return data;
        });
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
);

const authOperations = {
    register,
    login,
    logOut,
};

export default authOperations;