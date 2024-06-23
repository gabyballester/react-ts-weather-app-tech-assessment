import { WeatherResponse } from '../types';

// Mapper para adaptar los datos de la respuesta de la API al formato deseado
export const mapWeatherData = (data: WeatherResponse) => ({
  icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
  description: data.weather[0].description,
  temperature: data.main.temp,
  temp_min: data.main.temp_min,
  temp_max: data.main.temp_max,
});
