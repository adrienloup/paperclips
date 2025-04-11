import { createContext, Dispatch } from 'react';
import { Mode } from '@/src/generic/mode/Mode.type.ts';

export const ModeContext = createContext<[Mode, Dispatch<Mode>]>(['system', () => {}]);
