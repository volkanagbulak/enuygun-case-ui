// slices/reservationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventInfo: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvent: (state, action) => {
      state.eventInfo = action.payload;
    },
    cleareventInfo: (state) => {
      state.eventInfo = null;
    },
  },
});

export const { seteventInfo, cleareventInfo } = eventSlice.actions;

export const selecteventInfo = (state) => state.event.eventInfo;

export default eventSlice.reducer;
