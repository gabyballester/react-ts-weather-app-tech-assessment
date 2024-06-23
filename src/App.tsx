import { Box } from '@chakra-ui/react';

import { Header, MainContainer } from './components/';

const App: React.FC = () => {
  return (
    <Box
      data-testid="app-box"
      bgGradient={'linear(to-r, gray.300, blue.300)'}
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
