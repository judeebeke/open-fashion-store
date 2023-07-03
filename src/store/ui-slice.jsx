import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    currentProductImage: "",
  },
  reducers: {
    getSelectedProductImage(state, action) {
      state.currentProductImage = action.payload.image;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
