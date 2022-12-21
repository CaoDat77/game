import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { selectAllProducts } from "../products/products.slice";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload: itemId }) => {
      // const itemIndex = state.findIndex((item) => item.productId == productId);
      const itemIndex = state.findIndex((item) => item == itemId);
      console.log(state);
      if (itemIndex !== 1) {
        toast.info("Khóa học đã có trong giỏ hàng!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        return [...state];
      } else {
        const newState = [...state, itemId];
        toast.success("🦄 Thêm vào giỏ hàng thành công!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return newState;
      }
    },

    // incQty: (state, action) => {
    //   const itemIndex = state.findIndex(
    //     (item) => item.productId === action.payload
    //   );

    //   if (itemIndex !== -1) {
    //     const newState = [...state];

    //     const newItem = {
    //       ...newState[itemIndex],
    //       quantity: newState[itemIndex].quantity + 1,
    //     };

    //     newState[itemIndex] = newItem;

    //     return newState;
    //   }
    // },

    // decQty: (state, action) => {
    //   const index = state.findIndex(
    //     (item) => item.productId === action.payload
    //   );

    //   if (index !== -1 && state[index].quantity > 1) {
    //     const newState = [...state];

    //     const newItem = { ...newState[index] };
    //     newItem.quantity -= 1;

    //     newState[index] = newItem;

    //     return newState;
    //   }
    // },

    // removeItem: (state, action) => {
    //   const newState = state.filter(
    //     (item) => item.productId !== action.payload
    //   );
    //   return newState;
    // },

    // clearItem: (state, action) => {
    //   return initialState;
    // },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, incQty, decQty, removeItem, clearItem } =
  cartSlice.actions;

export const selectCart = (state) => {
  // const items = cart.map((item) => ({
  //   product: products.find((product) => product.id == item.productId),
  //   quantity: item.quantity,
  // }));

  // const API = "http://localhost:3002/products";
  // fetch(API)
  //   .then((res) => res.json())
  //   .then((data) => data);

  const listItem = useSelector(selectAllProducts);

  const cart = state.cart;
  const cartItems =
    cart.length === 0
      ? []
      : cart.map((item) => {
          return listItem.find((product) => product.id == item);
        });

  // const totalPrice = items.reduce(
  //   (total, item) => (total += item.product.price * item.quantity),
  //   0
  // );

  return {
    // totalPrice,
    incQty,
    decQty,
    removeItem,
    clearItem,
    cart,
    cartItems,
  };
};
