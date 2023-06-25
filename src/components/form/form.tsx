import React, { useState } from 'react';
import styles from './form.module.css';

const Form = () => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e:| React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    // Fetch suggestions based on the search value
    fetchSuggestions(value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    setSuggestions([]);
  };

  const fetchSuggestions = (value: string) => {
    // Mocked suggestion data
    const mockedSuggestions: string[] = [
      'New York',
      'London',
      'Paris',
      'Tokyo',
      'Sydney',
      'Berlin',
      'Rome',
      'Dubai',
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
            <button>Search</button>
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
