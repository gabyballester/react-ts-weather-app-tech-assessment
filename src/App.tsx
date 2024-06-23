import { Box } from '@chakra-ui/react';
import { Content, Header } from './components';

const App: React.FC = () => {
  return (
    <Box minH="100vh" bgSize="cover" display="flex" flexDirection="column">
      <Header />
      <Content />
    </Box>
  );
};

export default App;
