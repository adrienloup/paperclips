import { useEffect } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage';
import { Children } from '@/src/generic/types/Children.type';
import { Theme } from '@/src/generic/theme/Theme.type';
import { ThemeContext } from '@/src/generic/theme/Theme.context';

export function ThemeProvider({ children }: { children: Children }) {
  const [theme, setTheme] = useLocalStorage<Theme>('_theme_1mm2_3', 'light');

  useEffect(() => {
    setTheme(theme);
    if (
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.body.classList.add('_dark_1mm2_3');
    } else {
      document.body.classList.remove('_dark_1mm2_3');
    }

    const changeTheme = (event: { matches: boolean }) =>
      theme === 'dark' || (theme === 'system' && event.matches)
        ? document.body.classList.add('_dark_1mm2_3')
        : document.body.classList.remove('_dark_1mm2_3');

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeTheme);

    return () =>
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', changeTheme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
