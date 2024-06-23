import { Box, Heading, Button, Tooltip } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box
      as="header"
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="rgba(255, 255, 255, 0.7)"
      padding={10}
      gap={4}
    >
      <Heading textAlign="center" size="md">
        Weather App
      </Heading>
      <Box display="flex" gap="1rem">
        <Tooltip
          label={'change-to-spanish'}
          hasArrow
          placement="bottom"
          bg="gray.300"
          color="black"
          openDelay={200}
        >
          <Button onClick={() => {}} colorScheme={'teal'} width="100px">
            Spanish
          </Button>
        </Tooltip>
        <Tooltip
          label={'change-to-english'}
          hasArrow
          placement="bottom"
          bg="gray.300"
          color="black"
          openDelay={200}
        >
          <Button onClick={() => {}} colorScheme={'gray'} width="100px">
            English
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};
