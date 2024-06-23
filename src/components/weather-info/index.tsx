import { Box, Image, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { TranslationFileEnum, useLanguage } from '../../contexts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchWeatherAction } from '../../redux/weather/action';
import { capitalizeText } from '../../helpers';

export const WeatherInfo = () => {
  const dispatch: AppDispatch = useDispatch();
  const { t: translate } = useTranslation(TranslationFileEnum.GLOBAL);
  const { language } = useLanguage();
  const { selectedCity } = useSelector((state: RootState) => state.cityState);
  const { currentWeather } = useSelector(
    (state: RootState) => state.weatherState,
  );

  useEffect(() => {
    dispatch(fetchWeatherAction(selectedCity, language));
  }, [selectedCity, language]);

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
            <Text fontWeight="bold">
              {capitalizeText(translate(currentWeather.description), language)}
            </Text>
            <Image src={currentWeather.icon} alt="Weather icon" />
          </Box>
          <Text textAlign="center" fontWeight="semibold" marginBottom="3">
            {translate('current-temperature')}: {currentWeather.temperature} °C
          </Text>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignContent="space-between"
            width={'100%'}
          >
            <Text textAlign="center" color="#666">
              {translate('min-temperature')}: {currentWeather.temp_min} °C
            </Text>
            <Text textAlign="center" color="#666">
              {translate('max-temperature')}: {currentWeather.temp_max} °C
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
};
