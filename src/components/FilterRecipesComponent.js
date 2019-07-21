import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FilterItemRecipesComponent from "./FilterItemRecipesComponent";

class FilterRecipesComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { filtersRecipes } = this.props.filtersRecipes;
    console.log("filtersRecipes", filtersRecipes);
    return filtersRecipes.map((filterName, index) => <FilterItemRecipesComponent key={index} filterName={filterName} />);
  }
}

FilterRecipesComponent.propTypes = {
  filtersRecipes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  filtersRecipes: state.recipes
});

export default connect(mapStateToProps)(FilterRecipesComponent);
