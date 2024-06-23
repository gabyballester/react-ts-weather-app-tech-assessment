import { Box } from '@chakra-ui/react';
import { WeatherCard } from '../weather-card';

export const MainContainer = () => {
  return (
    <Box
      as="main"
      p={4}
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="black"
      paddingTop="150px"
    >
      <WeatherCard />
    </Box>
  );
};
