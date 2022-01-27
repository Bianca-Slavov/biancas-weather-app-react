import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Amsterdam",
    temperature: 12,
    date: "Friday",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
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
        <strong>{weatherData.temperature}</strong>
        <span className="units">°C</span>
      </div>
    </div>
  );
}
