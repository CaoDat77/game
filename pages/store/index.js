import { configureStore } from "@reduxjs/toolkit";
// import { cartReducer } from "./features/cart/cart.slice";
// import { categoriesReducer } from "./features/categories/categories.slice";
import { productsReducer } from "./features/products/products.slice";
// import { todoReducer } from "./features/todos/todo.slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
