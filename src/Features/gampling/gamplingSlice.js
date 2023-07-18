import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  name: '',
  location: '',
  glampingType: '',
  description: '',
  dailyRate: '',
};

 export const createGlamping = createAsyncThunk(
  'glamping/createGlampling',
  async(glamping) => {
    try {
      const res = await axios.post('/api/glamping', glamping)
      return res.data
    } catch (error) {
      throw new Error(error.message)
    }
  }
  );

const glampingSlice = createSlice({
  name: 'glamping',
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const {name, value} = action.payload;
      state[name] = value
    },
    clearValues: () => initialState,
  },
  extraReducers: (builder) => {
    builder
    .addCase(createGlamping.pending, (state) => ({
      ...state,
      isLoading: true
    }))
    .addCase(createGlamping.fulfilled, (state, {payload}) => {
      toast.success(`Job created`)
      return {
          ...state,
          isLoading: false
      }
    })
    .addCase(createGlamping.rejected, (state, {payload}) => {
      toast.error(payload)
      return {
          ...state,
          isLoading: false
      }
    })
  }
});


export const { handleChange, clearValues } = glampingSlice.actions;

export default glampingSlice.reducer;
