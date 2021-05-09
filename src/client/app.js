import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route render={(location) => <Routes location={location} />} />
      </BrowserRouter>
    );
  }
}

export default App;
