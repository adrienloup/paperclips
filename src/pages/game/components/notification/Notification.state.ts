import { State } from '@/src/pages/game/components/notification/Notification.type';

export const initialState: State = [
  { id: 1, text: 'Notification 1', enable: true, animate: true },
  { id: 2, text: 'Notification 2', enable: false, animate: false },
  { id: 3, text: 'Notification 3', enable: false, animate: false },
  { id: 4, text: 'Notification 4', enable: false, animate: false },
  { id: 5, text: 'Notification 5', enable: false, animate: false },
];
