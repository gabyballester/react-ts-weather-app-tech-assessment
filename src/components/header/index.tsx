import { Box, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from '../language-switch';
import { TranslationFileEnum } from '../../contexts';
import { CitySelector } from '../city-selector';

export const Header = () => {
  const { t: translate } = useTranslation(TranslationFileEnum.GLOBAL);

  return (
    <Box
      as="header"
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={6}
    >
      <Heading textAlign="center" size="md" width="300px">
        {translate('weather-app')}
      </Heading>

      <Box display="flex" gap="10">
        <CitySelector data-testid="city-selector" />
        <LanguageSwitch data-testid="language-switch" />
      </Box>
    </Box>
  );
};
