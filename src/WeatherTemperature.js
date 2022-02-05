import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <strong>
        <span className="weather-temperature">{Math.round(props.celsius)}</span>
      </strong>
      <span className="units">°C</span>
    </div>
  );
}
