import axios from "axios";

import { REQUEST_RECIPES, RECEIVE_RECIPES, RECEIVE_ERROR_RECIPES, SET_FILTERS_RECIPES, UDPATE_RECIPES } from "./types";

export const getRecipes = () => dispatch => {
  dispatch(requestRecipes());
  axios
    .get("api/")
    .then(res => {
      let allRecipes = res.data.results;
      const temp = allRecipes
        .map(recipe => {
          return recipe.ingredients;
        })
        .join(", ")
        .split(", ");
      let ingredientsList = [...new Set(temp)];
      dispatch(receiveRecipes(res.data.results, ingredientsList));
    })
    .catch(err => {
      dispatch(receiveErrorRecipes(err));
    });
};

export const requestRecipes = () => {
  return {
    type: REQUEST_RECIPES
  };
};

export const receiveRecipes = (recipes, ingredientsList) => {
  return {
    type: RECEIVE_RECIPES,
    payload: recipes,
    ingredientsList: ingredientsList
  };
};

export const receiveErrorRecipes = error => {
  return {
    type: RECEIVE_ERROR_RECIPES,
    payload: error
  };
};

export const addFiltersRecipes = (recipe, filtersRecipes) => dispatch => {
  filtersRecipes.push(recipe);
  dispatch(setFiltersRecipes(filtersRecipes));
};

export const removeFiltersRecipes = (recipe, filtersRecipes) => dispatch => {
  filtersRecipes.splice(filtersRecipes.indexOf(recipe), 1);
  dispatch(setFiltersRecipes(filtersRecipes));
};

export const setFiltersRecipes = filtersRecipes => {
  return {
    type: SET_FILTERS_RECIPES,
    payload: filtersRecipes
  };
};

export const udpateRecipes = (filtersRecipes, searchingRecipes, allRecipes, isAdded) => dispatch => {
  let searchingFilterRecipes = [];
  const recipesList = isAdded ? searchingRecipes : allRecipes;
  if (filtersRecipes.length === 0) {
    searchingFilterRecipes = allRecipes;
  } else if (filtersRecipes.length) {
    filtersRecipes.forEach(ingredient => {
      const found = recipesList ? recipesList.filter(el => el.ingredients.includes(ingredient)) : [];
      if (found !== undefined) {
        searchingFilterRecipes = typeof found.length === undefined ? [found] : found;
      } else {
        searchingFilterRecipes = [];
      }
    });
  } else {
    searchingFilterRecipes = allRecipes;
  }

  dispatch(setudpateRecipes(searchingFilterRecipes));
};

export const setudpateRecipes = searchingRecipes => {
  return {
    type: UDPATE_RECIPES,
    payload: searchingRecipes
  };
};
