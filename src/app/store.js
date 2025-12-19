import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice.js";
import productReducer from "../features/products/productSlice.js";
import loginReducer from "../features/login/loginSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    login: loginReducer
  },
});

export default store;
