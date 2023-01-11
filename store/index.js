import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart/cart.slice";
// import { cartReducer } from "./features/cart/cart.slice";
import { persistStore, persistReducer } from "redux-persist";
import { productsReducer } from "./features/products/products.slice";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./features/auth/auth.slice";
// import { todoReducer } from "./features/todos/todo.slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
