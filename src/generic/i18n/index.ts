import { initReactI18next } from 'react-i18next';
import { useTranslation } from './useTranslation';
import { GameTranslation } from '../../game/Game.translation';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: useTranslation(GameTranslation),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
