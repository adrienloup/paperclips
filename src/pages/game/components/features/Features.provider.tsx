import { useCallback, useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { featuresReducer } from '@/src/pages/game/components/features/Features.reducer.ts';
import {
  FeaturesContext,
  FeaturesDispatchContext,
} from '@/src/pages/game/components/features/Features.context.ts';
import { initialState } from '@/src/pages/game/components/features/Features.state.ts';
import { State } from '@/src/pages/game/components/features/Features.type.ts';
import { Children } from '@/src/generic/types/Children.type.ts';

export function FeaturesProvider({ children }: { children: Children }) {
  const [state, setState] = useLocalStorage<State>('_paperclips_3mma_0_feature', initialState);
  const [features, setFeatures] = useReducer(featuresReducer, state);

  const update = useCallback(() => {
    setState(features);
  }, [features, setState]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <FeaturesContext.Provider value={features}>
      <FeaturesDispatchContext.Provider value={setFeatures}>{children}</FeaturesDispatchContext.Provider>
    </FeaturesContext.Provider>
  );
}
