import React from 'react'
import styles from './result.module.css'

const Result = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Sydney</h2>
        <div className={styles.weather}>
          <div className={styles.weatherIcon}>
            <img
              src='https://openweathermap.org/img/wn/01d.png'
              alt='weather icon'
            />
            <div>
              <span>25</span>
              <span>&deg;C</span>
            </div>
          </div>
          <div className={styles.weatherInfo}>
            <div>
              <span>Sunny</span>
              <span>Feels like 25&deg;C</span>
            </div>

            <div>
              <span>Min</span>
              <span>25&deg;C</span>
            </div>

            <div>
              <span>Max</span>
              <span>25&deg;C</span>
            </div>

            <div>
              <span>Humidity</span>
              <span>25%</span>
            </div>

            <div>
              <span>Wind</span>
              <span>25 km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result