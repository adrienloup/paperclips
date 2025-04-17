import { useContext } from 'react';
import {
  NotificationsContext,
  NotificationsDispatchContext,
} from '@/src/pages/game/components/dashboard/notifications/Notifications.context.ts';

export const useNotifications = () => useContext(NotificationsContext);
export const useNotificationsDispatch = () => useContext(NotificationsDispatchContext);
