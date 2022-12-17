import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  currentPage: 0,
  filter: [],
  loading: true,
};
const PAGE_SIZE = 9;
export const loadProduct = createAsyncThunk(
  "products",
  async (args, thunkApi) => {
    const response = await fetch("http://localhost:3002/products");
    const data = await response.json();
    return data;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    pageChanged: (state, action) => {
      return { ...state, currentPage: action.payload };
    },
    filterChanged: (state, action) => {
      return {
        ...state,
        currentPage: 0,
        filter: action.payload,
      };
    },
  },

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

  extraReducers: (builder) => {
    builder.addCase(loadProduct.fulfilled, (state, action) => {
      console.log("LOLOLOL");
      console.log(action, state); //Không hiện thông tin
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    });
  },
});

export const productsReducer = productsSlice.reducer;
export const { pageChanged, displayChanged, filterChanged, addItem } =
  productsSlice.actions;

export const selectAllProducts = (state) => state.products.data;
export const selectProductById = (productId) => (state) =>
  state.products.data.find((product) => product.id == productId);
export const selectProductStatus = (state) =>
  state.products.loading || state.categories.loading;
export const selectProductsList = (state) => {
  const filteredProducts = state.products.data.filter((product) => {
    if (state.products.filter.length === 0) return true;
    else return state.products.filter.includes(product.category);
  });

  const total = filteredProducts.length;
  const totalPage = Math.ceil(total / PAGE_SIZE);

  const productsByPage = filteredProducts.slice(
    state.products.currentPage * PAGE_SIZE,
    (state.products.currentPage + 1) * PAGE_SIZE
  );

  return {
    // categories: state.categories.data,
    products: productsByPage,
    currentPage: state.products.currentPage,
    totalPage,
    displayStyle: state.products.displayStyle,
    pageChanged,
    displayChanged,
    filterChanged,
    loading: state.loading,
  };
};
