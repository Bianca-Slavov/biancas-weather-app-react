import React from "react";
import Form from "./Form";
import Weather from "./Weather";
import Conditions from "./Conditions";

import "./Container.css";

export default function Container() {
  return (
    <div className="Container">
      <div className="card">
        <Form />
        <Weather defaultCity="Amsterdam" />
        <Conditions />
      </div>
    </div>
  );
}
