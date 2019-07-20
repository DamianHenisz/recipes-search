import { combineReducers } from "redux";
import recipesReducers from "./recipesReducers";

export default combineReducers({
  recipes: recipesReducers
});
