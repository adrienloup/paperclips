import { useContext } from 'react';
import { ThemeContext } from '@/src/generic/theme/Theme.context.ts';

export const useTheme = () => useContext(ThemeContext);
