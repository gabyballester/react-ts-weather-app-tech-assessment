import { Select, Tooltip } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationFileEnum } from '../../contexts';

const citiesMock = ['london', 'toronto', 'singapore'];

export const CitySelector = () => {
  const { t } = useTranslation(TranslationFileEnum.GLOBAL);
  const [selectedCity, setSelectedCity] = useState('london');

  const setCity = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCity(value);
  };

  return (
    <Tooltip
      label={t('select-city')}
      hasArrow
      placement="bottom"
      bg="gray.300"
      color="black"
      openDelay={200}
    >
      <Select value={selectedCity} onChange={setCity} width="200px" bg="white">
        {citiesMock.map((city) => (
          <option key={city} value={city}>
            {t(city)}
          </option>
        ))}
      </Select>
    </Tooltip>
  );
};
