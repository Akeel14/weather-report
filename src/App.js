import React, { useState, useEffect } from "react";
import "./App.css";
import CitySearch from "./components/CitySearch";
import WeatherCard from "./components/WeatherCard";
import { getWeatherData } from "./utils/api";

function App() {
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (city) {
        const data = await getWeatherData(city.lat, city.lon);
        setWeatherData(data);
      }
    };
    fetchWeatherData();
  }, [city]);

  const backgroundImage = () => {
    const defaultImage = "url('/backgrounds/default.jpeg')";
    if (!weatherData) return defaultImage;

    const mainWeather = weatherData.weather[0].main.toLowerCase();
    const allowedWeatherTypes = ["clouds", "rain", "extreme", "snow", "clear"];

    return allowedWeatherTypes.includes(mainWeather)
      ? `url('/backgrounds/${mainWeather}.jpeg')`
      : defaultImage;
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${backgroundImage()}`,
        }}
      >
        <CitySearch setCity={setCity} />
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </header>
    </div>
  );
}

export default App;
