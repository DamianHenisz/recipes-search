import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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

RecipesItemComponent.propTypes = {
  recipes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  recipes: state.recipes
});

export default connect(mapStateToProps)(RecipesItemComponent);
