import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipes } from "../actions/recipesActions";
import ClipLoader from "react-spinners/ClipLoader";

import RecipesItemComponent from "./RecipesItemComponent";
import "../App.css";

class RecipesListComponent extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    const { searchingRecipes } = this.props.searchingRecipes;
    const { isLoadingRecipes } = this.props.isLoadingRecipes;
    if (isLoadingRecipes)
      return (
        <div className="recipesListComponent__spinner">
          <ClipLoader sizeUnit={"px"} size={70} color={"#000000"} />
        </div>
      );

    return searchingRecipes.map((object, index) => <RecipesItemComponent key={index} {...object} />);
  }
}

RecipesListComponent.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  searchingRecipes: PropTypes.object.isRequired,
  isLoadingRecipes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  searchingRecipes: state.recipes,
  isLoadingRecipes: state.recipes
});

export default connect(
  mapStateToProps,
  { getRecipes }
)(RecipesListComponent);
