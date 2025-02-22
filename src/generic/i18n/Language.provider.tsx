import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage';
import { Children } from '@/src/generic/types/Children.type';
import { Language } from '@/src/generic/i18n/Language.type';
import { LanguageContext } from '@/src/generic/i18n/Language.context';

export function LanguageProvider({ children }: { children: Children }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage<Language>('_3mma_0_language', 'en');

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = i18n.language;
  }, [language]);

  const onLangueChange = useCallback((newLangue: Language) => {
    setLanguage(newLangue);
    i18n.changeLanguage(newLangue);
    document.documentElement.lang = i18n.language;
  }, []);

  return (
    <LanguageContext.Provider value={[language, onLangueChange]}>
      {children}
    </LanguageContext.Provider>
  );
}
