import { useContext } from 'react';
import {
  NotificationsContext,
  NotificationsDispatchContext,
} from '@/src/game/components/notifications/repository/Notifications.context';

export function useNotifications() {
  return useContext(NotificationsContext);
}
export function useNotificationsDispatch() {
  return useContext(NotificationsDispatchContext);
}
