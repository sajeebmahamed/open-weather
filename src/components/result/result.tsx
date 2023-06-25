import React, { useContext } from 'react'
import styles from './result.module.css'
import { WeatherContext } from '../../store/WeatherContext';
import { WeatherElement } from '../../types';

const Result = () => {
  const { weatherData } = useContext(WeatherContext);
  const { main, icon, description } = weatherData?.weather[0] as WeatherElement
  return (
    <div className={styles.container}>
      {weatherData === null ? (
        <h2>
          Please search for a city to get the weather information of that city.
        </h2>
      ) : (
        <div className={styles.content}>
          <div className={styles.weather}>
            <div className={styles.weatherIcon}>
              <img
                src={`https://openweathermap.org/img/wn/${icon}.png`}
                alt='weather icon'
              />
              <div>
                <span> {weatherData?.main?.temp} </span>
                <span>&deg;C</span>
              </div>
            </div>
            <div className={styles.weatherInfo}>
              <div>
                <span>{main}</span>
                <br />
                <span>Feels like {weatherData?.main?.feels_like}&deg;C</span>
              </div>

              <div>
                <span>Min</span>
                <span>{weatherData?.main?.temp_min}&deg;C</span>
              </div>

              <div>
                <span>Max</span>
                <span>{weatherData?.main?.temp_min}&deg;C</span>
              </div>

              <div>
                <span>Humidity</span>
                <span>{weatherData?.main?.humidity}%</span>
              </div>

              <div>
                <span>Wind</span>
                <span>{weatherData?.wind?.speed} km/h</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Result