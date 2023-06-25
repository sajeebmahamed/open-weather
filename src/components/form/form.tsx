import React, { useContext, useState } from 'react';
import styles from './form.module.css';
import { fetchCityData } from '../../service';
import { WeatherContext } from '../../store/WeatherContext';

const Form = () => {
  const { getWeatherData } = useContext(WeatherContext)
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = async (suggestion: string) => {
    setSearchValue(suggestion);
    setSuggestions([]);

     try {
       const data: { lat: number; lon: number }[] = (await fetchCityData(
         suggestion
       )) as { lat: number; lon: number }[];
       const { lat, lon } = data[0];
       getWeatherData(lat, lon);
     } catch (error) {
       console.error('Failed to fetch latitude and longitude:', error);
     }
  };

  const fetchSuggestions = (value: string) => {
    const mockedSuggestions: string[] = [
      'London',
      'Paris',
      'Tokyo',
      'Sydney',
      'Berlin',
      'Rome',
      'Dubai',
      'Dhaka',
      'New Work',
      'Los Angeles',
      'Chicago',
      'Houston',
      'Phoenix',
      'Philadelphia',
    ];

    // Filter the mocked suggestions based on the search value
    const filteredSuggestions = mockedSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions as never[]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h2>City</h2>
          <div className={styles.search}>
            <input
              type='text'
              placeholder='Enter city name'
              value={searchValue}
              onChange={handleInputChange}
            />
            {suggestions.length > 0 && searchValue && (
              <ul className={styles.suggestionList}>
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
