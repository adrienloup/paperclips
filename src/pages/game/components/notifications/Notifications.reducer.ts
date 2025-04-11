import { Action, State } from '@/src/pages/game/components/notifications/Notifications.type.ts';

export const notificationsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ENABLE':
      const enabledNotifications = state.notifications.map((notification) =>
        notification.id === action.id ? { ...notification, enable: true } : notification
      );
      return {
        ...state,
        notifications: enabledNotifications,
      };
    case 'DISABLE':
      const disabledNotifications = state.notifications.map((notification) =>
        notification.id === action.id ? { ...notification, enable: false } : notification
      );
      return {
        ...state,
        notifications: disabledNotifications,
      };
    case 'VIEW':
      const viewedNotifications = state.notifications.map((notification) =>
        notification.id === action.id ? { ...notification, view: true } : notification
      );
      return {
        ...state,
        notifications: viewedNotifications,
      };
    case 'TOGGLE':
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
