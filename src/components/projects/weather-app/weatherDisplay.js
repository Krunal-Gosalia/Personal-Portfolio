import React, { useState, useEffect } from 'react';
import fetchWeather from './data/fetchWeather';
import { Row, Col } from "react-bootstrap";

/*
  Weather component makes a request to fetch data based on city prop
  On data success it renders the output.
*/
export default function WeatherDisplay({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    let data = null;
    if (city == null) {
      setWeatherData(null);
      return;
    }

    const fetchData = async () => {
      data = await fetchWeather(city);
      if (data) {
        setWeatherData(data);
      }
    };

    fetchData();
  }, [city]);

  return (
    <React.Fragment>
      {weatherData != null && (
        <Row className='weather-display justify-content-center'>
          <Col lg={4} md={3} sm={12} className='d-flex justify-content-center align-items-center'><img src={weatherData.condition.icon} alt="weather-condition" /></Col>
          <Col lg={8} md={9} sm={12} className='d-grid justify-content-center'>
            <p> Weather for {city}:</p>
            <p>Temp (Celcius): {weatherData.temp_c} </p>
            <p>Temp (Fahrenheit): {weatherData.temp_f} </p>
            <p>Last updated: {weatherData.last_updated} </p>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
}
