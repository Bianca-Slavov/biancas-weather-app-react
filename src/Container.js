import React from "react";
import Form from "./Form";
import Temperature from "./Temperature";
import Conditions from "./Conditions";

import "./Container.css";

export default function Container() {
  return (
    <div className="Container">
      <div className="card">
        <Form />
        <Temperature />
        <Conditions />
      </div>
    </div>
  );
}
