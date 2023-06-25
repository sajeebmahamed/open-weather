import React, { createContext, useState } from 'react';
import { fetchWeatherData } from '../service';
import { Weather } from '../types';

interface WeatherContextProps {
  weatherData: Weather | null;
  setWeatherData: (data: Weather | null) => void;
  getWeatherData: (lat: number, lon: number) => void;
}

export const WeatherContext = createContext<WeatherContextProps>({
  weatherData: null,
  setWeatherData: () => {},
  getWeatherData: () => {},
});

export const WeatherProvider = ({ children }: any) => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

  const getWeatherData = async (lat: number, lon: number) => {
    try {
      const res = await fetchWeatherData(lat, lon);
      setWeatherData(res as Weather);
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ weatherData, setWeatherData, getWeatherData }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
