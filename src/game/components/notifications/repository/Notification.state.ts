import { State } from '@/src/game/components/notifications/repository/Notification.type.ts';

export const initialState: State = {
  notifications: [
    { id: 0, text: 'Open Source UI components', show: true },
    { id: 1, text: 'Website mobile-friendly', show: false },
    { id: 2, text: 'Just for pleasure', show: false },
  ],
  notify: true,
};
