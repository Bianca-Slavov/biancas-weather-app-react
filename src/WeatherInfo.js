import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <p className="current-date">
        <FormattedDate date={props.data.date} />
      </p>
      <img
        src={props.data.imgUrl}
        width="50px"
        alt="weather-icon"
        className="icon"
      />

      <div className="weather-temperature">
        <strong>{props.data.temperature}</strong>
        <span className="units">°C</span>
      </div>

      <div className="Conditions">
        <h3>Rainy</h3>

        <ul>
          <li>
            {" "}
            Windspeed: {props.data.windspeed} <span></span> m/h
          </li>
          <li>
            Humidity: {props.data.humidity}
            <span></span>%
          </li>
        </ul>
      </div>
    </div>
  );
}
