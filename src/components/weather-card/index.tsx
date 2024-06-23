import { Box } from '@chakra-ui/react';
import { WeatherInfo } from '../weather-info';

export const WeatherCard = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      width="300px"
      backgroundColor="#f5f5f5"
      boxShadow="lg"
    >
      <WeatherInfo />
    </Box>
  );
};
