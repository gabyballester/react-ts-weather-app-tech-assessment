import React, { ReactNode, createContext, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

export enum LanguageEnum {
  ES = 'es',
  EN = 'en',
}

export enum TranslationFileEnum {
  GLOBAL = 'global',
}

export type ContextLanguageType = {
  language: LanguageEnum;
  changeLanguage: (newLanguage: LanguageEnum) => void;
};

export const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('language') as LanguageEnum;

  const isValidLanguage = Object.values(LanguageEnum).includes(
    savedLanguage as LanguageEnum,
  );

  const currentLanguage = isValidLanguage ? savedLanguage : LanguageEnum.EN;

  if (!isValidLanguage || savedLanguage === null) {
    localStorage.setItem('language', LanguageEnum.EN);
  }

  return currentLanguage;
};

export const LanguageContext = createContext<ContextLanguageType>(
  {} as ContextLanguageType,
);

export const useLanguage = (): ContextLanguageType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<LanguageEnum>(getInitialLanguage());

  const changeLanguage = (newLanguage: LanguageEnum) => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
