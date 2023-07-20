import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  name: '',
  location: '',
  glamping_type: '',
  description: '',
  image: '',
  daily_rate: 0.00,
};

export const createGlamping = createAsyncThunk(
  'glamping/createGlampling',
  async (glamping) => {
    try {
      const res = await axios.post('http://127.0.0.1:3000/glampings/create', glamping);
      return res.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const glampingSlice = createSlice({
  name: 'glamping',
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clearValues: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGlamping.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(createGlamping.fulfilled, (state) => {
        toast.success('Glamping created successfully');
        return {
          ...state,
          isLoading: false,
        };
      })
      .addCase(createGlamping.rejected, (state, { payload }) => {
        toast.error(payload);
        return {
          ...state,
          isLoading: false,
        };
      });
  },
});

export const { handleChange, clearValues } = glampingSlice.actions;

export default glampingSlice.reducer;
