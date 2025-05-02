import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../api/authAPI';

const userFromStorage = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: userFromStorage || null,
  isAuthenticated: !!userFromStorage,
  status: 'idle',
  error: null,
};

// Thunk: Login async
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const data = await loginUser(credentials);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message || 'Login failed');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
