import { State } from '@/src/pages/game/components/notifications/repository/Notification.type';

export const initialState: State = {
  notifications: [
    { id: 0, text: 'Open Source UI components', show: true },
    { id: 1, text: 'Website mobile-friendly', show: true },
    { id: 2, text: 'Just for pleasure', show: false },
    { id: 3, text: 'resourcesFeature', show: false },
  ],
  notify: true,
};
