import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum CityEnum {
  london = 'london',
  toronto = 'toronto',
  singapore = 'singapore',
}

export interface CityState {
  availableCities: string[];
  selectedCity: string;
}

export const initialState: CityState = {
  availableCities: [CityEnum.london, CityEnum.singapore, CityEnum.toronto],
  selectedCity: CityEnum.london,
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    selectCity: (state, action: PayloadAction<string>) => {
      state.selectedCity = action.payload;
    },
  },
});

export const { selectCity } = citySlice.actions;

export default citySlice.reducer;
