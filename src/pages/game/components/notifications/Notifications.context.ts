import { createContext, Dispatch } from 'react';
import { notificationsState } from '@/src/pages/game/components/notifications/Notifications.state.ts';
import { Action, State } from '@/src/pages/game/components/notifications/Notifications.type.ts';

export const NotificationsContext = createContext<State>(notificationsState);
export const NotificationsDispatchContext = createContext<Dispatch<Action>>(() => {});
