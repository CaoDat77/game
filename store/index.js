import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart/cart.slice";
// import { cartReducer } from "./features/cart/cart.slice";

import { productsReducer } from "./features/products/products.slice";
// import { todoReducer } from "./features/todos/todo.slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
