import { REQUEST_RECIPES, RECEIVE_RECIPES, RECEIVE_ERROR_RECIPES } from "../actions/types";

const initialState = {
  isLoadingRecipes: false,
  recipes: []
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
        recipes: action.payload
      };
    case RECEIVE_ERROR_RECIPES:
      return {
        ...state,
        isLoadingRecipes: false,
        error: action.payload
      };
    default:
      return state;
  }
}
