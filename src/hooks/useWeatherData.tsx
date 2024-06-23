import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../redux/store';
import { useLanguage } from '../contexts';
import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from '../redux/weather/slice';

export const useWeatherData = () => {
  const dispatch = useDispatch();
  const { selectedCity } = useSelector((state: RootState) => state.cityState);
  const { currentWeather, newWeather } = useSelector(
    (state: RootState) => state.weatherState,
  );
  const { language } = useLanguage();

  useEffect(() => {
    if (!selectedCity) return;

    dispatch(fetchWeatherStart());

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=f77e16ce3e2db538fd7addd545dc6ea8&lang=${language}&units=metric`,
      )
      .then((response) => {
        dispatch(fetchWeatherSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchWeatherFailure(error.message));
      });
  }, [selectedCity, language, dispatch]);

  return { currentWeather, newWeather };
};
