import { BASE_ICON_URL } from '../constants';
import { capitalizeText } from '../helpers';
import { ApiWeatherResponse, Weather } from '../types';

export const weatherDataMapper = (data: ApiWeatherResponse): Weather => ({
  icon: `${BASE_ICON_URL}/img/w/${data.weather[0].icon}.png`,
  description: capitalizeText(data.weather[0].description),
  temperature: data.main.temp,
  temp_min: data.main.temp_min,
  temp_max: data.main.temp_max,
});
