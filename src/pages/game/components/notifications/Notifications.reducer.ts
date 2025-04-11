import { Action, State } from '@/src/pages/game/components/notifications/Notifications.type.ts';

export const notificationsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ENABLE':
      return state.map((notification) =>
        notification.id === action.id && !notification.enable
          ? { ...notification, enable: true, view: false }
          : notification
      );
    case 'DISABLE':
      return state.map((notification) =>
        notification.id === action.id ? { ...notification, enable: false } : notification
      );
    case 'VIEW':
      return state.map((notification) =>
        notification.id === action.id ? { ...notification, view: true } : notification
      );
    default:
      return state;
  }
};
