import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice.js";

const store = configureStore({
  reducer: {
    cartReducer,
  },
});

export default store;
