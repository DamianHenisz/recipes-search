import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class SearchRecipesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: ""
    };
    this.handleChangeSearchRecipes = this.handleChangeSearchRecipes.bind(this);
    this.onAddDocument = this.onAddDocument.bind(this);
  }

  handleChangeSearchRecipes(event) {
    this.setState({ recipe: event.target.value });
  }

  onAddDocument() {
    this.setState({ recipe: "" });
  }

  render() {
    return (
      <Row>
        <Col sm={8}>
          <FormControl type="text" placeholder="Search Recipe..." value={this.state.recipe} onChange={this.handleChangeSearchRecipes} />
        </Col>
        <Col sm={4}>
          <Button variant="success" size="lg" block onClick={this.onAddDocument}>
            Search
          </Button>
        </Col>
      </Row>
    );
  }
}
export default SearchRecipesComponent;
