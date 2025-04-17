import { useCallback, useEffect } from 'react';
import { useLocalStorage } from '@/src/generic/hook/useLocalStorage.ts';
import { ThemeContext } from '@/src/generic/theme/Theme.context.ts';
import { Children } from '@/src/generic/type/Children.type.ts';
import { Theme } from '@/src/generic/theme/Theme.type.ts';

export function ThemeProvider({ children }: { children: Children }) {
  const [theme, setTheme] = useLocalStorage<Theme>('_theme_3mma_0', 'dusk');

  const updateTheme = useCallback(
    (newTheme: Theme) => {
      document.body.classList.remove(`_${theme}_3mma_0`);
      document.body.classList.add(`_${newTheme}_3mma_0`);
      setTheme(newTheme);
    },
    [setTheme]
  );

  const changeTheme = useCallback(
    (newTheme: Theme) => {
      updateTheme(newTheme);
    },
    [updateTheme]
  );

  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  return <ThemeContext.Provider value={[theme, changeTheme]}>{children}</ThemeContext.Provider>;
}
