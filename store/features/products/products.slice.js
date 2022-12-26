import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";

const initialState = {
  data: [],
  currentPage: 0,
  filter: [],
  loading: true,
  sort: [],
  search: "",
};
const PAGE_SIZE = 9;
export const loadProduct = createAsyncThunk(
  "products",
  async (args, thunkApi) => {
    const response = await fetch(
      "https://63a72e867989ad3286eb9587.mockapi.io/products"
    );
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
      console.log(state, action);
      return {
        ...state,
        currentPage: 0,
        filter: action.payload,
      };
    },

    sortChanged: (state, action) => {
      return {
        ...state,
        currentPage: 0,
        sort: action.payload,
      };
    },

    filtersSearch: (state, action) => {
      return {
        ...state,
        currentPage: 0,
        search: action.payload,
      };
    },

    filtersSort: (state, action) => {
      return {
        ...state,
        currentPage: 0,
        sort: action.payload,
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadProduct.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    });
  },
});

export const productsReducer = productsSlice.reducer;
export const {
  pageChanged,
  displayChanged,
  filterChanged,
  sortChanged,
  filtersSearch,
  filtersSort,
} = productsSlice.actions;

export const selectProductById = (productId) => (state) =>
  state.products.data.find((product) => product.id == productId);
export const selectProductStatus = (state) =>
  state.products.loading || state.categories.loading;
export const selectProductsList = (state) => {
  const filteredProducts = state.products.data.filter((product) => {
    if (state.products.filter.length === 0) {
      if (state.products.search.length === 0) {
        if (state.products.sort.length === 0) {
          return true;
        } else if (state.products.sort.includes("toHigh")) {
          return product.price.sort((a, b) => {
            return a - b;
          });
        } else if (state.products.sort.includes("toLow")) {
          return product.price.sort((a, b) => {
            return b - a;
          });
        }
      } else {
        return product.name.includes(state.products.search);
      }
    } else {
      return state.products.filter.includes(product.categories);
    }
  });

  const total = filteredProducts.length;
  const totalPage = Math.ceil(total / PAGE_SIZE);

  const productsByPage = filteredProducts.slice(
    state.products.currentPage * PAGE_SIZE,
    (state.products.currentPage + 1) * PAGE_SIZE
  );

  return {
    products: productsByPage,
    currentPage: state.products.currentPage,
    totalPage,
    displayStyle: state.products.displayStyle,
    pageChanged,
    displayChanged,
    filterChanged,
    loading: state.loading,
    filtersSort,
    filtersSearch,
  };
};
