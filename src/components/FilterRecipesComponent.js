import React, { Component } from "react";

import FilterItemRecipesComponent from "./FilterItemRecipesComponent";

class FilterRecipesComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FilterItemRecipesComponent />
        <FilterItemRecipesComponent />
        <FilterItemRecipesComponent />
        <FilterItemRecipesComponent />
      </div>
    );
  }
}
export default FilterRecipesComponent;
