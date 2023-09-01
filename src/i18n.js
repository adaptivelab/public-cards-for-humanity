import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'
import { default_locale } from './context/locales';

i18n
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    detection: { convertDetectedLanguage: (lng) => lng.replace('-', '_') },
    debug: true,
    fallbackLng: default_locale
  });

  export default i18n;
