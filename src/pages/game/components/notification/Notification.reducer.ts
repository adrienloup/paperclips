import { Action, State } from '@/src/pages/game/components/notification/Notification.type.ts';

export const notificationReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      console.log('action', action.id);
      return state.map((notification) =>
        notification.id === action.id ? { ...notification, enable: true } : notification
      );
    case 'DELETE_NOTIFICATION':
      return state.map((notification) =>
        notification.id === action.id ? { ...notification, enable: false } : notification
      );
    default:
      return state;
  }
};
