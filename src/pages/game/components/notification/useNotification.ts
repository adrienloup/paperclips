import { useContext } from 'react';
import {
  NotificationContext,
  NotificationDispatchContext,
} from '@/src/pages/game/components/notification/Notification.context.ts';

export function useNotification() {
  return useContext(NotificationContext);
}

export function useNotificationDispatch() {
  return useContext(NotificationDispatchContext);
}
