import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeFiltersRecipes, udpateRecipes } from "../actions/recipesActions";
import Button from "react-bootstrap/Button";

class FilterItemRecipesComponent extends Component {
  constructor(props) {
    super(props);
    this.onDeleteFilterRecipe = this.onDeleteFilterRecipe.bind(this);
  }
  onDeleteFilterRecipe() {
    this.props.removeFiltersRecipes(this.props.filterName, this.props.filtersRecipes, this.props.searchingRecipes);
    this.props.udpateRecipes(this.props.filtersRecipes, this.props.searchingRecipes, this.props.recipes);
  }
  render() {
    return (
      <Button variant="outline-danger filter__button" onClick={this.onDeleteFilterRecipe}>
        <strong>{this.props.filterName}</strong>
        <span aria-hidden="true"> ×</span>
      </Button>
    );
  }
}

FilterItemRecipesComponent.propTypes = {
  removeFiltersRecipes: PropTypes.func.isRequired,
  filtersRecipes: PropTypes.array.isRequired,
  searchingRecipes: PropTypes.array.isRequired,
  recipes: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  filtersRecipes: state.recipes.filtersRecipes,
  searchingRecipes: state.recipes.searchingRecipes,
  recipes: state.recipes.recipes
});
export default connect(
  mapStateToProps,
  { removeFiltersRecipes, udpateRecipes }
)(FilterItemRecipesComponent);
