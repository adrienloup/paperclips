import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage';
import { Children } from '@/src/generic/types/Children.type';
import { Language } from '@/src/generic/i18n/Language.type';
import { LanguageContext } from '@/src/generic/i18n/Language.context';

export function LanguageProvider({ children }: { children: Children }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage<Language>('_language_3mma_0', 'en');

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = i18n.language;
  }, [i18n, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
