import { initReactI18next } from 'react-i18next';
import { translation } from '@/src/generic/utils/translation.ts';
import { CommonTranslation } from '@/src/generic/common/Common.translation.ts';
import { HomeTranslation } from '@/src/pages/home/Home.translation.ts';
import { PageTranslation } from '@/src/pages/page/Page.translation.ts';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: translation(CommonTranslation, HomeTranslation, PageTranslation),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
