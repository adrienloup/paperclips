import { createContext, Dispatch } from 'react';
import { Stage } from '@/src/generic/stage/Stage.type.ts';

export const StageContext = createContext<[Stage, Dispatch<Stage>]>(['dusk', () => {}]);
