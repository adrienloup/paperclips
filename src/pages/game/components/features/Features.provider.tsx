import { useEffect, useMemo, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { featuresReducer } from '@/src/pages/game/components/features/Features.reducer.ts';
import {
  FeaturesContext,
  FeaturesDispatchContext,
} from '@/src/pages/game/components/features/Features.context.ts';
import { featuresState } from '@/src/pages/game/components/features/Features.state.ts';
import { State } from '@/src/pages/game/components/features/Features.type.ts';
import { Children } from '@/src/generic/types/Children.type.ts';

export function FeaturesProvider({ children }: { children: Children }) {
  const [storedState, setStoredState] = useLocalStorage<State>('_features_3mma_0', featuresState);
  const initialState = useMemo(() => storedState ?? featuresState, [storedState]);
  const [state, dispatch] = useReducer(featuresReducer, initialState);

  useEffect(() => {
    setStoredState(state);
  }, [state, setStoredState]);

  return (
    <FeaturesContext.Provider value={state}>
      <FeaturesDispatchContext.Provider value={dispatch}>{children}</FeaturesDispatchContext.Provider>
    </FeaturesContext.Provider>
  );
}
