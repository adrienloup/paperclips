import { createContext } from 'react';
import { Language } from '@/src/generic/i18n/Language.type';

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({
  language: 'en',
  setLanguage: (language: Language) => language,
});
