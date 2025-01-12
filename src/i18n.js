import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import el from './locales/el.json';
import en from './locales/en.json';

i18n
  .use(LanguageDetector) // Add the language detector
  .use(initReactI18next)  // Bind react-i18next to the instance
  .init({
    resources: {
      el: { translation: el },
      en: { translation: en }
    },
    fallbackLng: 'el',  // Fallback language if detection fails
    detection: {
      order: ['localStorage', 'navigator'], // Check localStorage first, then browser language
      caches: ['localStorage'] // Cache the selected language in localStorage
    },
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;
