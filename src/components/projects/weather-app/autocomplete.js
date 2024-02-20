import { useState, useEffect } from 'react';

import usaStatesCities from './data/usaStatesCities';

const searchCities = (input) => {
  const allCities = Object.values(usaStatesCities).flat();
  const results = allCities.filter(city =>
    city.toLowerCase().includes(input.toLowerCase())
  );

  return results;
};

/*
 * Autocomplete component is used to render and capture any events associated with form elements
 * On change of city input => it will search and render the list of cities that matches the criteria
 * On selection of a city - it will populate on the input and also pass the value to parent component via setSelectedCity.
 */
const AutoComplete = (props) => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const clear = () => {
    setInput('');
    setResults([]);
    props.setSelectedCity(null);
  };

  useEffect(() => {
    if (!input || input.length === 0 || input === props.selectedCity) {
      return;
    }

    const cities = searchCities(input);

    if (cities && cities.length > 0) {
      setResults(cities);
    }
  }, [input, props.selectedCity, setResults]);

  const onCityClick = (e) => {
    e.stopPropagation();
    const element = e.target;
    const cityName = element.id;

    setInput(cityName);
    props.setSelectedCity(cityName);
    setResults([]);
  };

  return (
    <div className='autocomplete-container'>
      <div className='search'>
        <input
          type='text'
          onChange={e => setInput(e.target.value)}
          value={input}
          placeholder='Enter USA City'
          onFocus={clear}
        />
      </div>

      {input.length > 0 && props.selectedCity !== input && (
        <div className='results' onClick={onCityClick}>
          <div className='results-count'>
            {results.length > 0
              ? `${results.length} results found`
              : 'No results found, please try again'}
          </div>

          {results.map((result, index) => {
            return (
              <div className='result' key={index} id={String(result)}>
                {result}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
