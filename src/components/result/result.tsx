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
            </div>
            <div className={styles.weatherInfo}>
              <div className={styles.item}>
                <p>Description: </p>
                <p>{weatherData?.weather[0]?.description}</p>
              </div>
              <div className={styles.item}>
                <p>Current temp:</p>
                <p>
                  {UtilityHelper.convertToFahrenheit(weatherData?.main?.temp)}
                  &deg;F
                </p>
              </div>
              <div className={styles.item}>
                <p>Feels like:</p>
                <p>
                  {UtilityHelper.convertToFahrenheit(
                    weatherData?.main?.feels_like
                  )}
                  &deg;F
                </p>
              </div>
              <div className={styles.item}>
                <p>Wind speed:</p>
                <p>
                  {UtilityHelper.convertToKmPerHour(weatherData?.wind?.speed)}
                  km/h
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Result