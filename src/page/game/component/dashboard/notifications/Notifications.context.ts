import { createContext, Dispatch } from 'react';
import { notificationsState } from '@/src/page/game/component/dashboard/notifications/Notifications.state.ts';
import {
  Action,
  State,
} from '@/src/page/game/component/dashboard/notifications/Notifications.type.ts';

export const NotificationsContext = createContext<State>(notificationsState);
export const NotificationsDispatchContext = createContext<Dispatch<Action>>(() => {});
