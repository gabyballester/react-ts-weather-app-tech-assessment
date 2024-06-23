import axios from 'axios';
import { ApiWeatherResponse, Weather } from '../../types';
import { mapWeatherData } from '../../mappers';

const API_KEY = 'f77e16ce3e2db538fd7addd545dc6ea8';

export const fetchWeatherDataService = async (
  selectedCity: string,
  language: string,
): Promise<Weather> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}&lang=${language}&units=metric`;

  try {
    const response = await axios.get<ApiWeatherResponse>(url);
    return mapWeatherData(response.data);
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};
