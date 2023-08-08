import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const middleware = [...getDefaultMiddleware(), thunk];

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
  middleware,
});

export default store;
