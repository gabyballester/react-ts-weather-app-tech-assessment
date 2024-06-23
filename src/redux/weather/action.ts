import { fetchWeatherDataService } from '../../services/weather';
import { AppThunk } from '../store';
import {
  fetchWeatherFailure,
  fetchWeatherStart,
  fetchWeatherSuccess,
} from './slice';

export const fetchWeatherAction =
  (city: string, language: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(fetchWeatherStart());
      const weatherData = await fetchWeatherDataService(city, language);
      dispatch(fetchWeatherSuccess(weatherData));
    } catch (error) {
      dispatch(
        fetchWeatherFailure(error instanceof Error ? error.message : 'error'),
      );
    }
  };
