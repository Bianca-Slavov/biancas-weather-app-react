import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <p className="current-date">
        <FormattedDate date={props.data.date} />
      </p>
      <WeatherIcon code={props.data.icon} size={50} className="icon" />

      <div className="weather-temperature">
        <WeatherTemperature celsius={props.data.temperature} />
      </div>

      <div className="Conditions">
        <h3>Rainy</h3>

        <ul>
          <li>
            {" "}
            Windspeed: {props.data.windspeed} <span></span> km/h
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
