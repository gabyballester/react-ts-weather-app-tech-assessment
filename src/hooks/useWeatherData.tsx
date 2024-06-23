import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../redux/store';
import { useLanguage } from '../contexts';

export const useWeatherData = () => {
  const { selectedCity } = useSelector((state: RootState) => state.cityState);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useLanguage();

  useEffect(() => {
    if (!selectedCity) return;

    setLoading(true);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=f77e16ce3e2db538fd7addd545dc6ea8&lang=${language}&units=metric`,
      )
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [selectedCity, language]);

  return { weatherData, loading, error };
};
