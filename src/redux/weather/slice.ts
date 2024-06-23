// src/redux/weatherSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiWeatherResponse, Weather } from '../../types';
import { mapWeatherData } from '../../mappers';

export interface WeatherState {
  currentWeather: Weather | null;
  newWeather: Weather | null;
  loading: boolean;
  error: string | null;
}

export const initialState: WeatherState = {
  currentWeather: null,
  newWeather: null,
  loading: false,
  error: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess: (state, action: PayloadAction<ApiWeatherResponse>) => {
      state.newWeather = mapWeatherData(action.payload);
      state.currentWeather = state.newWeather;
      state.loading = false;
      state.error = null;
    },
    fetchWeatherFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } =
  weatherSlice.actions;

export default weatherSlice.reducer;
