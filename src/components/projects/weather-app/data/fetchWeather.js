const handleError = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    return response.json();
  }
};

export default function fetchWeather(city) {
  const params = new URLSearchParams({
    key: process.env.REACT_APP_WEATHER_APP_API_KEY,
    q: city,
  });

  let headers = new Headers({
    "Content-Type": "application/json",
  });

  const weatherAPI = `https://api.weatherapi.com/v1/current.json?${params}`;

  return fetch(weatherAPI, { headers })
    .then(handleError)
    .then((data) => data.current)
    .catch((e) => console.log(e));
}