import { useState } from 'react';

import AutoComplete from './autocomplete';
import WeatherDisplay from './weatherDisplay';
import './style.css';

export default function Weather() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className='weather'>
      <AutoComplete
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      {selectedCity != null && <WeatherDisplay city={selectedCity} />}
    </div>
  );
}