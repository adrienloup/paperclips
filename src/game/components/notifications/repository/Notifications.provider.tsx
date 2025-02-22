import { useCallback, useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage';
import { notificationsReducer } from '@/src/game/components/notifications/repository/Notifications.reducer';
import {
  NotificationsContext,
  NotificationsDispatchContext,
} from '@/src/game/components/notifications/repository/Notifications.context';
import { initialState } from '@/src/game/components/notifications/repository/Notifications.state';
import { State } from '@/src/game/components/notifications/repository/Notifications.type';
import { Children } from '@/src/generic/types/Children.type';

export function NotificationsProvider({ children }: { children: Children }) {
  const [state, setState] = useLocalStorage<State>('_3mma_0_notifications', initialState);
  const [notifications, setNotifications] = useReducer(notificationsReducer, state);

  const update = useCallback(() => {
    console.log('2 notifications');
    setState(notifications);
  }, [notifications, setState]);

  useEffect(() => {
    console.log('1 update()');
    update();
  }, [update]);

  // const updateAside = useCallback(
  //   (newAside: boolean) => {
  //     setAside(newAside);
  //   },
  //   [setAside]
  // );
  //
  // const onAsideChange = useCallback((newAside: boolean) => {
  //   updateAside(newAside);
  // }, []);

  return (
    <NotificationsContext.Provider value={notifications}>
      <NotificationsDispatchContext.Provider value={setNotifications}>
        {children}
      </NotificationsDispatchContext.Provider>
    </NotificationsContext.Provider>
  );
}
