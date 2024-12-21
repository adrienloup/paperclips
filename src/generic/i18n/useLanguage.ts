import { useContext } from 'react';
import { LanguageContext } from './Language.context';

export function useLanguage() {
  return useContext(LanguageContext);
}
