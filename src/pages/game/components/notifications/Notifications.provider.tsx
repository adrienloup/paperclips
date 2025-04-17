import { useEffect, useMemo, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { notificationsReducer } from '@/src/pages/game/components/notifications/Notifications.reducer.ts';
import {
  NotificationsContext,
  NotificationsDispatchContext,
} from '@/src/pages/game/components/notifications/Notifications.context.ts';
import { notificationsState } from '@/src/pages/game/components/notifications/Notifications.state.ts';
import { State } from '@/src/pages/game/components/notifications/Notifications.type.ts';
import { Children } from '@/src/generic/types/Children.type.ts';

export function NotificationsProvider({ children }: { children: Children }) {
  const [storedState, setStoredState] = useLocalStorage<State>(
    '_notifications_3mma_0',
    notificationsState
  );
  const initialState = useMemo(() => storedState ?? notificationsState, [storedState]);
  const [state, dispatch] = useReducer(notificationsReducer, initialState);

  useEffect(() => {
    setStoredState(state);
  }, [state, setStoredState]);

  return (
    <NotificationsContext.Provider value={state}>
      <NotificationsDispatchContext.Provider value={dispatch}>
        {children}
      </NotificationsDispatchContext.Provider>
    </NotificationsContext.Provider>
  );
}
