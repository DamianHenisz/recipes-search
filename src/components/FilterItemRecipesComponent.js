import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class FilterItemRecipesComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button variant="outline-danger filter__button">
        <strong>Filter Name </strong>
        <span aria-hidden="true"> ×</span>
      </Button>
    );
  }
}
export default FilterItemRecipesComponent;
