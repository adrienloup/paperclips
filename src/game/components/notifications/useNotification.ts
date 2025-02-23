import { useContext } from 'react';
import {
  NotificationContext,
  NotificationDispatchContext,
} from '@/src/game/components/notifications/repository/Notification.context.ts';

export function useNotification() {
  return useContext(NotificationContext);
}
export function useNotificationDispatch() {
  return useContext(NotificationDispatchContext);
}
