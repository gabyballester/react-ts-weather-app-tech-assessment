import { Box } from '@chakra-ui/react';
import { WeatherEnum, weatherGradients } from './constants';
import { Header, MainContainer } from './components/';

const App: React.FC = () => {
  return (
    <Box
      bgGradient={weatherGradients[WeatherEnum.Cloudy]}
      minH="100vh"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <MainContainer />
    </Box>
  );
};

export default App;
