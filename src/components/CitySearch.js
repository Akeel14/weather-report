import React, { useState, useEffect } from "react";
import { getCityCoordinates } from "../utils/api";
import Select from "react-select";

const CitySearch = ({ setCity }) => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchCityCoordinates = async () => {
      if (inputValue) {
        const cityData = await getCityCoordinates(inputValue);
        const options = cityData.map((city) => ({
          value: { lat: city.lat, lon: city.lon },
          label: `${city.name}, ${city.country}`,
        }));
        setOptions(options);
      }
    };
    fetchCityCoordinates();
  }, [inputValue]);

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleChange = (selectedOption) => {
    setCity(selectedOption.value);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "rgba(0, 0, 0, 0.5)" : "white",
    }),
  };

  const handleMenuClose = () => {
    // Clear the input value when the menu is closed after making a selection
    if (inputValue) {
      setInputValue(null);
    }
  };

  return (
    <Select
      className="city-search"
      options={options}
      onInputChange={handleInputChange}
      onChange={handleChange}
      placeholder="Enter a City"
      noOptionsMessage={() => "No cities found"}
      autoFocus
      styles={customStyles}
      value={inputValue} // Bind the value to the state
      onMenuClose={handleMenuClose} // Add the onMenuClose event

    />
  );
};

export default CitySearch;
