import { Box, Image, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useWeatherData } from '../../hooks';
import { WeatherResponse } from '../../types';
import { mapWeatherData } from '../../mappers';
import { TranslationFileEnum, useLanguage } from '../../contexts';
import { capitalizeText } from '../../helpers';

export const WeatherCard = () => {
  const { t } = useTranslation(TranslationFileEnum.GLOBAL);
  const { language } = useLanguage();
  const { weatherData } = useWeatherData();

  const mappedData = weatherData
    ? mapWeatherData(weatherData as WeatherResponse)
    : null;

  if (!mappedData) return null;

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      width="300px"
      backgroundColor="#f5f5f5"
      boxShadow="lg"
    >
      {mappedData && (
        <Box p="6" display="flex" flexDirection="column">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="1"
          >
            <Text fontWeight="bold">
              {capitalizeText(t(mappedData.description), language)}
            </Text>
            <Image src={mappedData.icon} alt="Weather icon" />
          </Box>

          <Text textAlign="center" fontWeight="semibold" marginBottom="3">
            {t('current-temperature')}: {mappedData.temperature} °C
          </Text>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text textAlign="center" color="#666">
              {t('min-temperature')}: {mappedData.temp_min} °C
            </Text>

            <Text textAlign="center" color="#666">
              {t('max-temperature')}: {mappedData.temp_max} °C
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};
