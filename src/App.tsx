import { Box } from '@chakra-ui/react';
import { WeatherEnum, weatherGradients } from './constants';
import { Header, Content } from './components/';

const App: React.FC = () => {
  return (
    <Box
      bgGradient={weatherGradients[WeatherEnum.Cloudy]}
      minH="100vh"
      bgSize="cover"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <Content />
    </Box>
  );
};

export default App;
