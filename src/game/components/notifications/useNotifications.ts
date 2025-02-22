import { useContext } from 'react';
import {
  NotificationContext,
  NotificationDispatchContext,
} from '@/src/game/components/notifications/repository/Notification.context.ts';

export function useNotifications() {
  return useContext(NotificationContext);
}
export function useNotificationsDispatch() {
  return useContext(NotificationDispatchContext);
}
