import { initReactI18next } from 'react-i18next';
import { translation } from '@/src/generic/utils/translation.ts';
import { CommonTranslation } from '@/src/generic/common/Common.translation.ts';
import { GameTranslation } from '@/src/page/game/Game.translation.ts';
import { ExploreTranslation } from '@/src/page/explore/Explore.translation.ts';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: translation(CommonTranslation, GameTranslation, ExploreTranslation),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
