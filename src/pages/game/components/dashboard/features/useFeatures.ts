import { useContext } from 'react';
import {
  FeaturesContext,
  FeaturesDispatchContext,
} from '@/src/pages/game/components/dashboard/features/Features.context.ts';

export const useFeatures = () => useContext(FeaturesContext);
export const useFeaturesDispatch = () => useContext(FeaturesDispatchContext);
