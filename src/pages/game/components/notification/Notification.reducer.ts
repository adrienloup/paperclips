import { Action, State } from '@/src/pages/game/components/notification/Notification.type.ts';

export const notificationReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD':
      return state.map((notification) =>
        notification.id === action.id ? { ...notification, enable: true, animate: true } : notification
      );
    case 'REMOVE':
      return state.map((notification) =>
        notification.id === action.id ? { ...notification, enable: false } : notification
      );
    case 'UPDATE':
      return state.map((notification) =>
        notification.id === action.id ? { ...notification, animate: false } : notification
      );
    default:
      return state;
  }
};
