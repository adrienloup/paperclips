import { Action, State } from '@/src/game/components/notifications/repository/Notifications.type';

export const notificationsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADDED':
      return state.map((notif) => (notif.id === action.id ? { ...notif, show: true } : notif));
    case 'DELETED':
      return state.filter((notif) => notif.id !== action.id);
    default:
      return state;
  }
};
