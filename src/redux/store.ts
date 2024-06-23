import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import cityReducer from './city/slice';
import weatherReducer from './weather/slice';

export const store = configureStore({
  reducer: {
    cityState: cityReducer,
    weatherState: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;
