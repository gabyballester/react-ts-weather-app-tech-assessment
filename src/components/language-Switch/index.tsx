import { Box, Button, Tooltip } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import { LanguageEnum, TranslationFileEnum, useLanguage } from '../../contexts';

export const LanguageSwitch = () => {
  const { t: translate } = useTranslation(TranslationFileEnum.GLOBAL);
  const { language, changeLanguage } = useLanguage();

  return (
    <Box display="flex" gap="1rem">
      <Tooltip
        label={translate('change-to-spanish')}
        hasArrow
        placement="bottom"
        bg="gray.300"
        color="black"
        openDelay={200}
      >
        <Button
          onClick={() => changeLanguage(LanguageEnum.ES)}
          colorScheme={language === LanguageEnum.ES ? 'teal' : 'gray'}
          width="100px"
        >
          {translate('spanish')}
        </Button>
      </Tooltip>
      <Tooltip
        label={`${translate('change-to-english')}`}
        hasArrow
        placement="bottom"
        bg="gray.300"
        color="black"
        openDelay={200}
      >
        <Button
          onClick={() => changeLanguage(LanguageEnum.EN)}
          colorScheme={language === LanguageEnum.EN ? 'teal' : 'gray'}
          width="100px"
        >
          {translate('english')}
        </Button>
      </Tooltip>
    </Box>
  );
};
