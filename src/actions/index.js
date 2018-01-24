import axios from 'axios';

const API_KEY = '18a00376ba26a59828b0762a536fd65a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?id=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city) {
 const url = `${ROOT_URL}&q=${city},us`;
 const request = axios.get(url);

 
return {
  type : FETCH_WEATHER,
  payload : request
};
}
