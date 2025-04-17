import { useEffect, useMemo, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hook/useLocalStorage.ts';
import { notificationsReducer } from '@/src/page/game/component/dashboard/notifications/Notifications.reducer.ts';
import {
  NotificationsContext,
  NotificationsDispatchContext,
} from '@/src/page/game/component/dashboard/notifications/Notifications.context.ts';
import { notificationsState } from '@/src/page/game/component/dashboard/notifications/Notifications.state.ts';
import { State } from '@/src/page/game/component/dashboard/notifications/Notifications.type.ts';
import { Children } from '@/src/generic/type/Children.type.ts';

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
