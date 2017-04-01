import axios from 'axios';

const API_KEY = 'cf760af9bf9f71ba9f448e631e9cd4aa';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(url);

  return{
    type : FETCH_WEATHER,
    payload : request
  }
}
