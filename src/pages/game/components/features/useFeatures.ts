import { useContext } from 'react';
import {
  FeaturesContext,
  FeaturesDispatchContext,
} from '@/src/pages/game/components/features/Features.context.ts';

export function useFeatures() {
  return useContext(FeaturesContext);
}

export function useFeaturesDispatch() {
  return useContext(FeaturesDispatchContext);
}
