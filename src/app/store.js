import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice.js";
import productReducer from "../features/products/productSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;
