import { createContext, Dispatch } from 'react';
import { initialState } from '@/src/game/components/notifications/repository/Notifications.state';
import {
  Action,
  State,
} from '@/src/game/components/notifications/repository/Notifications.type';

export const NotificationsContext = createContext<State[]>(initialState);
export const NotificationsDispatchContext = createContext<Dispatch<Action>>(() => {});
