import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipes } from "../actions/recipesActions";

import RecipesItemComponent from "./RecipesItemComponent";

class RecipesListComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    const { recipes } = this.props.recipes;
    console.log(recipes);
    return recipes.map((object, index) => <RecipesItemComponent key={index} {...object} />);
  }
}

RecipesListComponent.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  recipes: state.recipes
});

export default connect(
  mapStateToProps,
  { getRecipes }
)(RecipesListComponent);
