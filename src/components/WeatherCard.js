import React from "react";

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="weather-card">
      <h2>{weatherData.name}</h2>
      <p>{weatherData.weather[0].description}</p>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Feels Like: {weatherData.main.feels_like} °C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
