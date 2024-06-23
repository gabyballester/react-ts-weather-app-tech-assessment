import { Box, Image, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { TranslationFileEnum } from '../../contexts';
import { useWeatherData } from '../../hooks';

export const WeatherInfo = () => {
  const { t } = useTranslation(TranslationFileEnum.GLOBAL);
  const { currentWeather } = useWeatherData();

  return (
    <Box p="6" display="flex" flexDirection="column" alignItems="center">
      {currentWeather && (
        <>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="1"
          >
            <Text fontWeight="bold">{t(currentWeather.description)}</Text>
            <Image src={currentWeather.icon} alt="Weather icon" />
          </Box>
          <Text textAlign="center" fontWeight="semibold" marginBottom="3">
            {t('current-temperature')}: {currentWeather.temperature} °C
          </Text>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text textAlign="center" color="#666">
              {t('min-temperature')}: {currentWeather.temp_min} °C
            </Text>
            <Text textAlign="center" color="#666">
              {t('max-temperature')}: {currentWeather.temp_max} °C
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
};
