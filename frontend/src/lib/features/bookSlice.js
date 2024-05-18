import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  floor: null,
  unit: "",
};

export const bookSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    updateFloor: (state, action) => {
      state.floor = action.payload;
    },
    updateUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
});

export const { updateFloor, updateUnit } = bookSlice.actions;
export default bookSlice.reducer;
