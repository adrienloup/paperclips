import { useContext } from 'react';
import {
  FeaturesContext,
  FeaturesDispatchContext,
} from '@/src/page/game/component/features/Features.context.ts';

export const useFeatures = () => useContext(FeaturesContext);
export const useFeaturesDispatch = () => useContext(FeaturesDispatchContext);
