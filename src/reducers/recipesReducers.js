import { REQUEST_RECIPES, RECEIVE_RECIPES, RECEIVE_ERROR_RECIPES, SET_FILTERS_RECIPES, UDPATE_RECIPES } from "../actions/types";

const initialState = {
  isLoadingRecipes: false,
  recipes: [],
  ingredients: [],
  filtersRecipes: [],
  searchingRecipes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_RECIPES:
      return {
        ...state,
        isLoadingRecipes: true
      };
    case RECEIVE_RECIPES:
      return {
        ...state,
        isLoadingRecipes: false,
        recipes: action.payload,
        searchingRecipes: action.payload
      };
    case RECEIVE_ERROR_RECIPES:
      return {
        ...state,
        isLoadingRecipes: false,
        error: action.payload
      };
    case SET_FILTERS_RECIPES:
      return {
        ...state,
        filtersRecipes: action.payload
      };
    case UDPATE_RECIPES:
      return {
        ...state,
        searchingRecipes: action.payload
      };
    default:
      return state;
  }
}
