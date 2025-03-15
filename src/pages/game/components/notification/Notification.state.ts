import { State } from '@/src/pages/game/components/notification/Notification.type';

export const initialState: State = [
  {
    id: 1,
    text: 'Notification 1 lorem ipsum',
    page: 'page1',
    enable: true,
    animate: true,
  },
  { id: 2, text: 'Notification 2', page: 'page2', enable: false, animate: false },
  {
    id: 3,
    text: 'Notification 3 lorem ipsum',
    page: 'page3',
    enable: false,
    animate: false,
  },
  { id: 4, text: 'Notification 4', page: 'page4', enable: false, animate: false },
  { id: 5, text: 'Notification 5 lorem', page: 'page5', enable: false, animate: false },
];
