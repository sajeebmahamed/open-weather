import React, { useContext } from 'react'
import styles from './result.module.css'
import { WeatherContext } from '../../store/WeatherContext';
import UtilityHelper from '../../helper/utility.helper';

const Result = () => {
  const { weatherData } = useContext(WeatherContext);
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
                src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}.png`}
                alt='weather icon'
              />
              <div>
                <span>
                  {UtilityHelper.convertToCelsius(weatherData?.main?.temp)}
                </span>
                <span>&deg;C</span>
              </div>
            </div>
            <div className={styles.weatherInfo}>
              <div>
                <span>{weatherData?.weather[0]?.main}</span>
                <br />
                <span>
                  Feels like{' '}
                  {UtilityHelper.convertToCelsius(
                    weatherData?.main?.feels_like
                  )}
                  &deg;C
                </span>
              </div>

              <div>
                <span>Min</span>
                <span>
                  {UtilityHelper.convertToCelsius(weatherData?.main?.temp_min)}
                  &deg;C
                </span>
              </div>

              <div>
                <span>Max</span>
                <span>
                  {UtilityHelper.convertToCelsius(weatherData?.main?.temp_min)}
                  &deg;C
                </span>
              </div>

              <div>
                <span>Humidity</span>
                <span>{weatherData?.main?.humidity}%</span>
              </div>

              <div>
                <span>Wind</span>
                <span>
                  {UtilityHelper.convertToKmPerHour(weatherData?.wind?.speed)}
                  km/h
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Result