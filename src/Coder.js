import React from "react";

import "./Coder.css";

export default function Coder() {
  return (
    <div className="Coder">
      <span class="coded-by">
        <a
          href="https://github.com/Bianca-Slavov/biancas-weather-app"
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
    </div>
  );
}
