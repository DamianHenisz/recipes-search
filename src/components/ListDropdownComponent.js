import React, { Component } from "react";

import Form from "react-bootstrap/Form";

class ListDropdownComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form.Group>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
    );
  }
}
export default ListDropdownComponent;
