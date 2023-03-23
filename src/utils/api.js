import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
export const getCityCoordinates = async (cityName) => {
  const response = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`
  );
  return response.data;
};

export const getWeatherData = async (lat, lon) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
  return response.data;
};
