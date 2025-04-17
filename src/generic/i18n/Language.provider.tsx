import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { LanguageContext } from '@/src/generic/i18n/Language.context.ts';
import { Children } from '@/src/generic/types/Children.type.ts';
import { Language } from '@/src/generic/i18n/Language.type.ts';

export function LanguageProvider({ children }: { children: Children }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage<Language>('_language_3mma_0', 'en');

  const updateLanguage = useCallback(
    (newLanguage: Language) => {
      i18n.changeLanguage(newLanguage);
      document.documentElement.lang = newLanguage;
      setLanguage(newLanguage);
    },
    [setLanguage, i18n]
  );

  const changedLanguage = useCallback(
    (newLanguage: Language) => {
      updateLanguage(newLanguage);
    },
    [updateLanguage]
  );

  useEffect(() => {
    updateLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={[language, changedLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
}
