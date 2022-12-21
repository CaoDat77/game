const initState = {
  search: "",
  status: "All",
  priority: [],
};

const filtersReducer = (state = initState, action) => {
  console.log(state);
  switch (action.type) {
    case "filter/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;

