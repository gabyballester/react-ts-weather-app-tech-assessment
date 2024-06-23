import { Box, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from '../language-switch';
import { TranslationFileEnum } from '../../contexts';
import { CitySelector } from '../city-selector';

export const Header = () => {
  const { t } = useTranslation(TranslationFileEnum.GLOBAL);

  return (
    <Box
      as="header"
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="rgba(255, 255, 255, 0.7)"
      padding={6}
    >
      <Heading textAlign="center" size="md" width="300px">
        {t('weather-app')}
      </Heading>

      <Box display="flex" gap="10">
        <CitySelector />
        <LanguageSwitch />
      </Box>
    </Box>
  );
};
