import React from "react";

import "./Conditions.css";

export default function Conditions() {
  let weatherData = {
    windspeed: 2,
    humidity: 84
  };

  return (
    <div className="Conditions">
      <h3>Rainy</h3>

      <ul>
        <li>
          {" "}
          Windspeed: {weatherData.windspeed} <span></span> m/h
        </li>
        <li>
          Humidity: {weatherData.humidity}
          <span></span>%
        </li>
      </ul>
    </div>
  );
}
