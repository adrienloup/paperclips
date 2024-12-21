import { initReactI18next } from 'react-i18next';
import { translation } from '../utils/translation';
import { GameTranslation } from '../../game/Game.translation';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: translation(GameTranslation),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
