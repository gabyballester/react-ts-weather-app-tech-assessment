export enum WeatherEnum {
  Sunny = 'sunny',
  Windy = 'windy',
  Cloudy = 'cloudy',
  Rainy = 'rainy',
  Night = 'night',
}

export const weatherGradients = {
  [WeatherEnum.Sunny]: 'linear(to-r, yellow.300, yellow.500)',
  [WeatherEnum.Windy]: 'linear(to-r, gray.300, blue.300)',
  [WeatherEnum.Cloudy]: 'linear(to-r, gray.400, gray.600)',
  [WeatherEnum.Rainy]: 'linear(to-r, blue.400, blue.600)',
  [WeatherEnum.Night]: 'linear(to-r, purple.900, blue.900)',
};
