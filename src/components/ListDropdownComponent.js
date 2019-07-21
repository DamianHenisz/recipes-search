import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addFiltersRecipes, udpateRecipes } from "../actions/recipesActions";
import Form from "react-bootstrap/Form";

class ListDropdownComponent extends Component {
  constructor(props) {
    super(props);
    this.onSearchRecipe = this.onSearchRecipe.bind(this);
  }

  onSearchRecipe(recipe) {
    this.props.addFiltersRecipes(recipe, this.props.filtersRecipes, this.props.searchingRecipes);
    this.props.udpateRecipes(this.props.filtersRecipes, this.props.searchingRecipes, this.props.recipes);
  }
  render() {
    const { ingredients } = this.props.ingredients;
    return (
      <Form.Control as="select" onChange={e => this.onSearchRecipe(e.target.value)}>
        {ingredients.map((value, key) => {
          return <option key={key}>{value}</option>;
        })}
      </Form.Control>
    );
  }
}

ListDropdownComponent.propTypes = {
  addFiltersRecipes: PropTypes.func.isRequired,
  ingredients: PropTypes.array.isRequired,
  filtersRecipes: PropTypes.array.isRequired,
  searchingRecipes: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  ingredients: state.recipes,
  filtersRecipes: state.recipes.filtersRecipes,
  searchingRecipes: state.recipes.searchingRecipes
});

export default connect(
  mapStateToProps,
  { addFiltersRecipes, udpateRecipes }
)(ListDropdownComponent);
