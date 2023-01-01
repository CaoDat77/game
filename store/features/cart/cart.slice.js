import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../products/products.slice";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload: { productId, quantity } }) => {
      const itemIndex = state.findIndex((item) => item.productId == productId);
      if (itemIndex !== -1) {
        const newItem = {
          ...state[itemIndex],
          quantity: state[itemIndex].quantity + quantity,
        };

        const newState = [...state];
        newState[itemIndex] = newItem;

        return newState;
      } else {
        return [...state, { productId, quantity }];
      }
    },

    incQty: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.productId === action.payload
      );

      if (itemIndex !== -1) {
        const newState = [...state];

        const newItem = {
          ...newState[itemIndex],
          quantity: newState[itemIndex].quantity + 1,
        };

        newState[itemIndex] = newItem;

        return newState;
      }
    },

    decQty: (state, action) => {
      const index = state.findIndex(
        (item) => item.productId === action.payload
      );

      if (index !== -1 && state[index].quantity > 1) {
        const newState = [...state];

        const newItem = { ...newState[index] };
        newItem.quantity -= 1;

        newState[index] = newItem;

        return newState;
      }
    },

    removeItem: (state, action) => {
      const newState = state.filter(
        (item) => item.productId !== action.payload
      );
      return newState;
    },

    clearItem: (state, action) => {
      return initialState;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, incQty, decQty, removeItem, clearItem } =
  cartSlice.actions;

export const selectCart = (state) => {
  const Products = state.products.data;
  const cart = state.cart;

  const items = cart.map((item) => ({
    product: Products.find((product) => product.id == item.productId),
    quantity: item.quantity,
  }));

  // const toLocal = localStorage.setItem("cart", JSON.stringify(items));

  // const getValue = localStorage.getItem("cart");
  // const toJavaSrcipt = JSON.parse(getValue);

  // const getLocal = localStorage.getItem("cart");
  // const toJavaSrcipt = JSON.parse(getLocal);

  const totalPrice = items.reduce(
    (total, item) => (total += item.product.price * item.quantity),
    0
  );
  return {
    items,
    totalPrice,
    incQty,
    decQty,
    removeItem,
    clearItem,
  };
};
