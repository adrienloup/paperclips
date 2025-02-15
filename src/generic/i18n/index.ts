import { initReactI18next } from 'react-i18next';
import { translation } from '@/src/generic/utils/translation';
import { CommonTranslation } from '@/src/generic/common/Common.translation.ts';
import { GameTranslation } from '@/src/game/Game.translation';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: translation(CommonTranslation, GameTranslation),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
