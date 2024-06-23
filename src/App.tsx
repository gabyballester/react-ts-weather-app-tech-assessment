import { Box } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <Box h="100vh" w="100%">
      <Box h="100px" bg="blue.500">
        Header
      </Box>

      <Box h={`calc(100vh - 100px)`} overflowY="auto">
        Contenido
      </Box>
    </Box>
  );
};

export default App;
