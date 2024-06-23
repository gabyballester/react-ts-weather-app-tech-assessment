import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './city/slice'; // Importa CityState aquí

export const store = configureStore({
  reducer: {
    cityState: cityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
