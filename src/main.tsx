import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { LanguageProvider, getInitialLanguage } from './contexts';
import { global_es, global_en } from './translations';

import App from './App.tsx';

import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false, // helps to debug missing translation keys
  interpolation: { escapeValue: false },
  lng: getInitialLanguage(),
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

export { global_es, global_en };

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <LanguageProvider>
        <ChakraProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ChakraProvider>
      </LanguageProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
