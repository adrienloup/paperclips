import { useCallback, useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage';
import { notificationReducer } from '@/src/game/components/notifications/repository/Notification.reducer.ts';
import {
  NotificationContext,
  NotificationDispatchContext,
} from '@/src/game/components/notifications/repository/Notification.context.ts';
import { initialState } from '@/src/game/components/notifications/repository/Notification.state.ts';
import { State } from '@/src/game/components/notifications/repository/Notification.type.ts';
import { Children } from '@/src/generic/types/Children.type';

export function NotificationProvider({ children }: { children: Children }) {
  const [state, setState] = useLocalStorage<State>('_3mma_0_notifications', initialState);
  const [notification, setNotification] = useReducer(notificationReducer, state);

  const update = useCallback(() => {
    setState(notification);
  }, [notification, setState]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <NotificationContext.Provider value={notification}>
      <NotificationDispatchContext.Provider value={setNotification}>
        {children}
      </NotificationDispatchContext.Provider>
    </NotificationContext.Provider>
  );
}
