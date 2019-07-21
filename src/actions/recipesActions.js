//import axios from "axios";

import { REQUEST_RECIPES, RECEIVE_RECIPES, RECEIVE_ERROR_RECIPES, SET_FILTERS_RECIPES, UDPATE_RECIPES } from "./types";

export const getRecipes = () => dispatch => {
  dispatch(requestRecipes());
  // axios
  //   .get("http://www.recipepuppy.com/api/")
  //   .then(res => {
  //     dispatch(receiveRecipes(res.data));
  //   })
  //   .catch(err => {
  //     dispatch(receiveErrorRecipes(err));
  //   });
  let allRecipes = [
    {
      title: "Ginger Champagne",
      href: "http://allrecipes.com/Recipe/Ginger-Champagne/Detail.aspx",
      ingredients: "champagne, ginger, ice, vodka",
      thumbnail: "http://img.recipepuppy.com/1.jpg"
    },
    {
      title: "Potato and Cheese Frittata",
      href: "http://allrecipes.com/Recipe/Potato-and-Cheese-Frittata/Detail.aspx",
      ingredients: "cheddar cheese, eggs, olive oil, onions, potato, salt",
      thumbnail: "http://img.recipepuppy.com/2.jpg"
    },
    {
      title: "Eggnog Thumbprints",
      href: "http://allrecipes.com/Recipe/Eggnog-Thumbprints/Detail.aspx",
      ingredients: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
      thumbnail: "http://img.recipepuppy.com/3.jpg"
    },
    {
      title: "Succulent Pork Roast",
      href: "http://allrecipes.com/Recipe/Succulent-Pork-Roast/Detail.aspx",
      ingredients: "brown sugar, garlic, pork chops, water",
      thumbnail: "http://img.recipepuppy.com/4.jpg"
    },
    {
      title: "Irish Champ",
      href: "http://allrecipes.com/Recipe/Irish-Champ/Detail.aspx",
      ingredients: "black pepper, butter, green onion, milk, potato, salt",
      thumbnail: "http://img.recipepuppy.com/5.jpg"
    },
    {
      title: "Chocolate-Cherry Thumbprints",
      href: "http://allrecipes.com/Recipe/Chocolate-Cherry-Thumbprints/Detail.aspx",
      ingredients: "cocoa powder, baking powder, butter, eggs, flour, oats, salt, sugar, vanilla extract",
      thumbnail: "http://img.recipepuppy.com/6.jpg"
    },
    {
      title: "Mean Woman Pasta",
      href: "http://allrecipes.com/Recipe/Mean-Woman-Pasta/Detail.aspx",
      ingredients: "garlic, kalamata olive, olive oil, pepperoncini, seashell pasta, tomato",
      thumbnail: "http://img.recipepuppy.com/7.jpg"
    },
    {
      title: "Hot Spiced Cider",
      href: "http://allrecipes.com/Recipe/Hot-Spiced-Cider/Detail.aspx",
      ingredients: "allspice, apple cider, brown sugar, cinnamon, cloves, nutmeg, orange, salt",
      thumbnail: "http://img.recipepuppy.com/8.jpg"
    },
    {
      title: "Isa's Cola de Mono",
      href: "http://allrecipes.com/Recipe/Isas-Cola-de-Mono/Detail.aspx",
      ingredients: "cinnamon, cloves, instant coffee, milk, rum, vanilla extract, water, sugar",
      thumbnail: "http://img.recipepuppy.com/9.jpg"
    },
    {
      title: "Amy's Barbecue Chicken Salad",
      href: "http://allrecipes.com/Recipe/Amys-Barbecue-Chicken-Salad/Detail.aspx",
      ingredients: "barbecue sauce, chicken, cilantro, lettuce, ranch dressing, lettuce, tomato",
      thumbnail: "http://img.recipepuppy.com/10.jpg"
    }
  ];
  const temp = allRecipes
    .map(recipe => {
      return recipe.ingredients;
    })
    .join(", ")
    .split(", ");
  let ingredientsList = [...new Set(temp)];
  dispatch(receiveRecipes(allRecipes, ingredientsList));
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

export const udpateRecipes = (filtersRecipes, searchingRecipes, allRecipes) => dispatch => {
  let searchingFilterRecipes = [];
  if (filtersRecipes.length === 0) {
    searchingFilterRecipes = allRecipes;
  } else if (filtersRecipes.length) {
    filtersRecipes.forEach(ingredient => {
      const found = searchingRecipes ? searchingRecipes.filter(el => el.ingredients.includes(ingredient)) : [];
      console.log(found);
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
