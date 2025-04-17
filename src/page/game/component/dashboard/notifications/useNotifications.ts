import { useContext } from 'react';
import {
  NotificationsContext,
  NotificationsDispatchContext,
} from '@/src/page/game/component/dashboard/notifications/Notifications.context.ts';

export const useNotifications = () => useContext(NotificationsContext);
export const useNotificationsDispatch = () => useContext(NotificationsDispatchContext);
