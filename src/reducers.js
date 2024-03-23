const initialSearchState = {
  searchField: "",
};

export const searchRobots = (state = initialSearchState, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_FIELD":
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
