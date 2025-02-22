import { Action, State } from '@/src/game/components/notifications/repository/Notification.type.ts';

export const notificationReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD':
      return {
        notifications: state.notifications.map((notif) =>
          notif.id === action.id ? { ...notif, show: true } : notif
        ),
        notify: true,
      };
    case 'DELETE':
      return {
        ...state,
        notifications: state.notifications.filter((notif) => notif.id !== action.id),
      };
    case 'NOTIFY':
      return {
        ...state,
        notify: action.notify,
      };
    default:
      return state;
  }
};
