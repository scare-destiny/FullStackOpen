import axios from "axios";
import { useState, useEffect } from "react";

const Weather = ({ country }) => {
	const [temperature, setTemperature] = useState([]);
	const [wind, setWind] = useState([])

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getTemperature = async (longitude, latitude) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );

				setTemperature(response.data.main.temp);
				setWind(response.data.wind.speed)
      } catch (err) {
				setTemperature("");
				setWind('')
      }
    };
    const [lng, lat] = country.capitalInfo.latlng;
    getTemperature(lat, lng);
  }, []);

  return (
    <div>
      <h4>Weather in {country.capital}</h4>
      <p>temp {temperature}</p>
			<p>capital coordinates are {country.capitalInfo.latlng} </p>
			<p>wind speed is {wind}m/s</p>
    </div>
  );
};

export default Weather