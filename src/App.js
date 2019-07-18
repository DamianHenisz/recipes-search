import React, { Component } from "react";

//import { Provider, connect } from "react-redux";
//import store from "./store/configureStore";
import SearchRecipesComponent from "./components/SearchRecipesComponent";
import ListDropdownComponent from "./components/ListDropdownComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

class App extends Component {
  render() {
    return (
      // <Provider //store={store}>
      <Container className="App-Container">
        <Row>
          <Col sm={4}>
            <ListDropdownComponent />
          </Col>
          <Col sm={8}>
            <SearchRecipesComponent />
          </Col>
        </Row>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>

        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>

        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>

        <p>TEST</p>
      </Container>

      // </Provider>
    );
  }
}
export default App;
