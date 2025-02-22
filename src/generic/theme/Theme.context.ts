import { createContext, Dispatch } from 'react';
import { Theme } from '@/src/generic/theme/Theme.type';

export const ThemeContext = createContext<[Theme, Dispatch<Theme>]>(['system', () => {}]);
