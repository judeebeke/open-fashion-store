import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    currentProductImage: "",
    currentMenu: "ladies_all",
    myRand: 0,
    cartActive: false,
  },
  reducers: {
    getSelectedProductImage(state, action) {
      state.currentProductImage = action.payload.image;
    },
    getCurrentMenu(state, action) {
      state.currentMenu = action.payload.currentMenu;
    },
    getRandomNumber(state) {
      state.myRand = Math.floor(Math.random() * 6);
    },
    cartActiveHandle(state) {
      state.cartActive = !state.cartActive;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
