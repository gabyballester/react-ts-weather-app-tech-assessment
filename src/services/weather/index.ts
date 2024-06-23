import axios from 'axios';
import { ApiWeatherResponse, Weather } from '../../types';
import { weatherDataMapper } from '../../mappers';
import { API_KEY, BASE_APP_URL } from '../../constants';

export const fetchWeatherDataService = async (
  selectedCity: string,
  language: string,
): Promise<Weather> => {
  const url = `${BASE_APP_URL}/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}&lang=${language}&units=metric`;

  try {
    const response = await axios.get<ApiWeatherResponse>(url);
    return weatherDataMapper(response.data);
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};
