import React, { Component } from "react";

class RecipesItemComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>
          <img src={this.props.thumbnail} />
          <h3> {this.props.title}</h3>
          <p>{this.props.ingredients}</p>
          <a href={this.props.href}>{this.props.href}</a>
        </span>
      </div>
    );
  }
}

export default RecipesItemComponent;
