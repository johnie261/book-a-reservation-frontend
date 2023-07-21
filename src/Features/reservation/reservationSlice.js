import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  reservationDate: '',
  city: '',
  selectedGlampingId: null,
};

export const createReservation = createAsyncThunk(
  'reservation/createReservation',
  async (reservation) => {
    try {
      const res = await axios.post('http://localhost:3000/reservations/create', reservation);
      return res.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const reservationSlice = createSlice({
  name: 'reservation',
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
      .addCase(createReservation.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(createReservation.fulfilled, (state) => {
        toast.success('Reservation created successfully');
        return {
          ...state,
          isLoading: false,
        };
      })
      .addCase(createReservation.rejected, (state, { payload }) => {
        toast.error(payload);
        return {
          ...state,
          isLoading: false,
        };
      });
  },
});

export const { handleChange, clearValues } = reservationSlice.actions;

export default reservationSlice.reducer;
