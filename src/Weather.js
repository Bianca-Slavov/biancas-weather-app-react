import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import { search } from "language-tags";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      img: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  function search() {
    const apiKey = "bad8df618c99f7689be26e10f430a853";
    let city = "london";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
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
  } else {
    search();
    return "Loading...";
  }
}
