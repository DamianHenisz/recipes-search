import React, { Component } from "react";
import Media from "react-bootstrap/Media";
import "../App.css";
class RecipesItemComponent extends Component {
  render() {
    return (
      <div className="recipesListComponent__row">
        <Media>
          <img width={200} height={200} className="align-self-center mr-3" src={this.props.thumbnail} alt="img" />
          <Media.Body>
            <h3> {this.props.title}</h3>
            <h5>Ingredients:</h5>
            <p>{this.props.ingredients}</p>
            <a href={this.props.href}>{this.props.href}</a>
          </Media.Body>
        </Media>
      </div>
    );
  }
}

export default RecipesItemComponent;
