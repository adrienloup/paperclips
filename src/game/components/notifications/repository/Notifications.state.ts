import { State } from '@/src/game/components/notifications/repository/Notifications.type';

export const initialState: State = [
  { id: 0, text: 'Open Source UI components', show: true },
  { id: 1, text: 'Website mobile-friendly', show: false },
  { id: 2, text: 'Just for pleasure', show: false },
];
