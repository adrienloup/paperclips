import { useEffect, useMemo, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { noticesReducer } from '@/src/pages/game/components/dashboard/notices/Notices.reducer.ts';
import {
  NoticesContext,
  NoticesDispatchContext,
} from '@/src/pages/game/components/dashboard/notices/Notices.context.ts';
import { noticesState } from '@/src/pages/game/components/dashboard/notices/Notices.state.ts';
import { State } from '@/src/pages/game/components/dashboard/notices/Notices.type.ts';
import { Children } from '@/src/generic/types/Children.type.ts';

export function NoticesProvider({ children }: { children: Children }) {
  const [storedState, setStoredState] = useLocalStorage<State>('_notices_3mma_0', noticesState);
  const initialState = useMemo(() => storedState ?? noticesState, [storedState]);
  const [state, dispatch] = useReducer(noticesReducer, initialState);

  useEffect(() => {
    setStoredState(state);
  }, [state, setStoredState]);

  return (
    <NoticesContext.Provider value={state}>
      <NoticesDispatchContext.Provider value={dispatch}>{children}</NoticesDispatchContext.Provider>
    </NoticesContext.Provider>
  );
}
