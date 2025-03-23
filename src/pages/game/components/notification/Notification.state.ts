import { State } from '@/src/pages/game/components/notification/Notification.type.ts';

export const initialState: State = [
  {
    id: 'stage1',
    text: 'game.notification.stage1',
    path: 'stage1',
    enable: true,
    animate: true,
  },
  {
    id: 'autoClippers',
    text: 'game.notification.autoClippers',
    path: 'autoclippers',
    enable: false,
    animate: false,
  },
  {
    id: 'marketing',
    text: 'game.notification.marketing',
    path: 'marketing',
    enable: false,
    animate: false,
  },
  {
    id: 'trust',
    text: 'game.notification.trust',
    path: 'trust',
    enable: false,
    animate: false,
  },
  {
    id: 'projects',
    text: 'game.notification.projects',
    path: 'projects',
    enable: false,
    animate: false,
  },
];
