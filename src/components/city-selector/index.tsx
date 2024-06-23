import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationFileEnum } from '../../contexts';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Tooltip } from '@chakra-ui/react';
import { selectCity } from '../../redux/city/slice';
import { RootState } from '../../redux/store';

export const CitySelector = () => {
  const { t: translate } = useTranslation(TranslationFileEnum.GLOBAL);

  const dispatch = useDispatch();
  const { selectedCity, availableCities } = useSelector(
    (state: RootState) => state.cityState,
  );

  const setCity = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectCity(e.target.value));
  };

  return (
    <Tooltip
      label={translate('select-city')}
      hasArrow
      placement="bottom"
      bg="gray.300"
      color="black"
      openDelay={200}
    >
      <Select value={selectedCity} onChange={setCity} width="200px" bg="white">
        {availableCities.map((city) => (
          <option key={city} value={city}>
            {translate(city)}
          </option>
        ))}
      </Select>
    </Tooltip>
  );
};
