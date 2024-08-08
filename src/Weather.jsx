import React, { useState, useEffect } from 'react';
import './Weather.css';

const openWeatherMapApiKey = "b09e633ee8fed057b37b0a1602c25cb0";

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Hardcoded latitude and longitude for Rourkela (you can change this dynamically)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=22.2271&lon=84.8536&appid=${openWeatherMapApiKey}&units=metric`);
        if (!response.ok) {
          throw new Error('Error fetching weather data.');
        }
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setWeatherData(null);
      }
    };

    fetchWeatherData(); // Invoke the function to fetch weather data

    // Dependency array is empty as we do not have any dynamic dependencies
  }, []);

  return (
    <div className='fullbox'>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && (
        <div className="mainbox" style={{ marginTop: '0px' }}>
          <div className='details'>
            <ul>
              <li>{weatherData.main.humidity}% <br />💧Humidity</li>
              <li>{weatherData.wind.speed} m/s <br />🎏 Wind Speed</li>
              <li>{weatherData.main.pressure} hPa <br />🔩 Pressure</li>
            </ul>
          </div>
          <div className="sidebox">
            <h2>📌Rourkela</h2>
            <div className="cond">
              <p className='temper'>{weatherData.main.temp}°C</p>
              <p>{weatherData.weather[0].main} <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="" /></p>
            </div>
            <p className="desc">{weatherData.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
