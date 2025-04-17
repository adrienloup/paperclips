import { useContext } from 'react';
import { ModeContext } from '@/src/generic/mode/Mode.context.ts';

export const useMode = () => useContext(ModeContext);
