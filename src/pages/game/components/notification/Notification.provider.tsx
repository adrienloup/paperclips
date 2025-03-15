import { useCallback, useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { notificationReducer } from '@/src/pages/game/components/notification/Notification.reducer.ts';
import {
  NotificationContext,
  NotificationDispatchContext,
} from '@/src/pages/game/components/notification/Notification.context.ts';
import { initialState } from '@/src/pages/game/components/notification/Notification.state.ts';
import { State } from '@/src/pages/game/components/notification/Notification.type.ts';
import { Children } from '@/src/generic/types/Children.type.ts';

export function NotificationProvider({ children }: { children: Children }) {
  const [state, setState] = useLocalStorage<State>(
    '_paperclips_3mma_0_notification',
    initialState
  );
  const [notifications, setNotifications] = useReducer(notificationReducer, state);

  const update = useCallback(() => {
    setState(notifications);
  }, [notifications, setState]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <NotificationContext.Provider value={notifications}>
      <NotificationDispatchContext.Provider value={setNotifications}>
        {children}
      </NotificationDispatchContext.Provider>
    </NotificationContext.Provider>
  );
}
