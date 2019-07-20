import React, { Component } from "react";
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
    this.setState({ recipe: "" });
  }

  render() {
    return (
      <Row>
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
export default SearchRecipesComponent;
