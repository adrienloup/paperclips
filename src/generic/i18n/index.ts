import { initReactI18next } from 'react-i18next';
import { translation } from '@/src/generic/utils/translation';
import { GameTranslation } from '@/src/game/Game.translation';
import { GenericTranslation } from '@/src/generic/Generic.translation.ts';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: translation(GameTranslation, GenericTranslation),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
