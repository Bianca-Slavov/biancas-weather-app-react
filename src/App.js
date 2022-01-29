import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Weather defaultCity="Amsterdam" />
        </div>
        <footer>
          <span className="coded-by">
            <a
              href="https://github.com/Bianca-Slavov/biancas-weather-app-react"
              target="_blank"
              rel="noreferrer"
              className="source-link"
            >
              Open-source code
            </a>{" "}
            by{" "}
            <a
              href="https://www.linkedin.com/in/biancaslavov/"
              target="_blank"
              rel="noreferrer"
            >
              Bianca Slavov
            </a>
          </span>
          ;
        </footer>
      </div>
    </div>
  );
}
