import { Box, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import { TranslationFileEnum } from '../../contexts';

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
      <Heading textAlign="center" size="md">
        {t('weather-app')}
      </Heading>
      <LanguageSwitcher />
    </Box>
  );
};
