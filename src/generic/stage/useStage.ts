import { useContext } from 'react';
import { StageContext } from '@/src/generic/stage/Stage.context.ts';

export const useStage = () => useContext(StageContext);
