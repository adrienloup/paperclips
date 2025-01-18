import { createContext } from 'react';
import { Theme } from '@/src/generic/theme/Theme.type';

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'light',
  setTheme: (theme: Theme) => theme,
});
