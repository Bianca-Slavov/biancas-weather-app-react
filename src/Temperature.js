import React from "react";

import "./Temperature.css";

export default function Temperature() {
  let weatherData = {
    city: "Amsterdam",
    temperature: 12,
    date: "Friday",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
  };

  return (
    <div className="Temperature">
      <h1>{weatherData.city}</h1>
      <p className="current-date">{weatherData.date}</p>
      <img
        src={weatherData.imgUrl}
        width="50px"
        alt="weather-icon"
        className="icon"
      />

      <div className="weather-temperature">
        <strong></strong>
        <span className="units">{weatherData.temperature} °C</span>
      </div>
    </div>
  );
}
