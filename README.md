# Weather App

This Weather App is a React-based web application that allows users to search for a city and displays the current weather information for the selected city. The app uses OpenWeatherMap API to fetch city coordinates and weather data.

<img width="1438" alt="Screen Shot 2023-03-23 at 3 27 11 PM" src="https://user-images.githubusercontent.com/58542001/227327428-ce028228-447c-4688-8a80-1e0444d4dc0f.png">

## Features
1. Autocomplete city search with a dropdown menu
2. Display city name, temperature (in Celsius), and other weather information
3. Change the background image based on the weather condition

## Prerequisites
- Node.js
- Yarn or npm (package manager)
- OpenWeatherMap API Key

## Getting Started
Follow the steps below to set up and run the project on your local machine.

### 1. Clone the repository
- git clone https://github.com/Akeel14/weather-report.git
- cd weather-app

### 2. Install dependencies
#### Using npm:
- npm install

#### Using Yarn:
- yarn install

### 3. Obtain an API Key
- Visit OpenWeatherMap.org and sign up for a free account to obtain an API key.

### 4. Set up your environment variables
#### Create a .env.local file in the root directory of the project and add your OpenWeatherMap API key as follows:
- REACT_APP_WEATHER_API_KEY=your_api_key_here
- Replace your_api_key_here with the API key obtained from OpenWeatherMap.

### 5. Run the development server
#### Using npm:
npm start

#### Using Yarn:
yarn start

This command will start the development server at http://localhost:3000.

## Built with
- React
- Create React App
- react-select
- axios
- OpenWeatherMap API

## License
This project is licensed under the MIT License.

