import React, { Component } from "react";
import "../App.css";
class RecipesItemComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="recipesListComponent__row">
        <span>
          <img src={this.props.thumbnail} alt="img" />
          <h3> {this.props.title}</h3>
          <p>{this.props.ingredients}</p>
          <a href={this.props.href}>{this.props.href}</a>
        </span>
      </div>
    );
  }
}

export default RecipesItemComponent;
