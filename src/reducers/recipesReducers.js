import { test } from "../actions/types";

const initialState = {
  isLoadingRecipes: false,
  recipes: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case test:
      return {
        ...state
      };
    default:
      return state;
  }
}
