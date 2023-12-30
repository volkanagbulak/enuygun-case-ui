// slices/reservationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservationInfo: null,
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setReservationInfo: (state, action) => {
      debugger;
      state.reservationInfo = action.payload;
    },
    clearReservationInfo: (state) => {
      state.reservationInfo = null;
    },
  },
});

export const { setReservationInfo, clearReservationInfo } = reservationSlice.actions;

export const selectReservationInfo = (state) => state.reservation.reservationInfo;

export default reservationSlice.reducer;
