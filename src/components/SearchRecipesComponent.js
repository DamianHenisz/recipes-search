import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addFiltersRecipes, udpateRecipes } from "../actions/recipesActions";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SearchRecipesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: ""
    };
    this.handleChangeSearchRecipe = this.handleChangeSearchRecipe.bind(this);
    this.onSearchRecipe = this.onSearchRecipe.bind(this);
  }

  handleChangeSearchRecipe(event) {
    this.setState({ recipe: event.target.value });
  }

  onSearchRecipe() {
    if (this.state.recipe.length === 0) return;
    this.props.addFiltersRecipes(this.state.recipe, this.props.filtersRecipes, this.props.searchingRecipes);
    this.setState({ recipe: "" });
    this.props.udpateRecipes(this.props.filtersRecipes, this.props.searchingRecipes, this.props.recipes);
  }

  render() {
    return (
      <Row className="searchRecipesComponent__row">
        <Col sm={8}>
          <FormControl type="text" placeholder="Search Recipe..." value={this.state.recipe} onChange={this.handleChangeSearchRecipe} />
        </Col>
        <Col sm={4}>
          <Button className="button-search" variant="success" size="lg" block onClick={this.onSearchRecipe}>
            Search
          </Button>
        </Col>
      </Row>
    );
  }
}

SearchRecipesComponent.propTypes = {
  addFiltersRecipes: PropTypes.func.isRequired,
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
  { addFiltersRecipes, udpateRecipes }
)(SearchRecipesComponent);
