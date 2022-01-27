import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Container from "./Container";
import Coder from "./Coder";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container />
      <Coder />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
