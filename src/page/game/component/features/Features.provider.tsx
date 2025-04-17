import { useEffect, useMemo, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hook/useLocalStorage.ts';
import { featuresReducer } from '@/src/page/game/component/features/Features.reducer.ts';
import {
  FeaturesContext,
  FeaturesDispatchContext,
} from '@/src/page/game/component/features/Features.context.ts';
import { featuresState } from '@/src/page/game/component/features/Features.state.ts';
import { State } from '@/src/page/game/component/features/Features.type.ts';
import { Children } from '@/src/generic/type/Children.type.ts';

export function FeaturesProvider({ children }: { children: Children }) {
  const [storedState, setStoredState] = useLocalStorage<State>('_features_3mma_0', featuresState);
  const initialState = useMemo(() => storedState ?? featuresState, [storedState]);
  const [state, dispatch] = useReducer(featuresReducer, initialState);

  useEffect(() => {
    setStoredState(state);
  }, [state, setStoredState]);

  return (
    <FeaturesContext.Provider value={state}>
      <FeaturesDispatchContext.Provider value={dispatch}>
        {children}
      </FeaturesDispatchContext.Provider>
    </FeaturesContext.Provider>
  );
}
