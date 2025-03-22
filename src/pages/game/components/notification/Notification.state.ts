import { State } from '@/src/pages/game/components/notification/Notification.type.ts';

export const initialState: State = [
  {
    id: 1,
    text: 'game.notifications.firstStage',
    path: 'stage1',
    enable: true,
    animate: true,
  },
  {
    id: 2,
    text: 'game.notifications.machine',
    path: 'machine',
    enable: false,
    animate: false,
  },
  {
    id: 3,
    text: 'game.notifications.marketing',
    path: 'marketing',
    enable: false,
    animate: false,
  },
  {
    id: 4,
    text: 'game.notifications.trust',
    path: 'trust',
    enable: false,
    animate: false,
  },
  {
    id: 5,
    text: 'game.notifications.projects',
    path: 'projects',
    enable: false,
    animate: false,
  },
];
