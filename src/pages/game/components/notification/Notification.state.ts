import { State } from '@/src/pages/game/components/notification/Notification.type.ts';

export const initialState: State = [
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
    id: 'megaClippers',
    text: 'game.notification.megaClippers',
    path: 'megaclippers',
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
  {
    id: 'stage1',
    text: 'game.notification.stage1',
    path: 'stage1',
    enable: true,
    animate: true,
  },
  {
    id: 'trust',
    text: 'game.notification.trust',
    path: 'trust',
    enable: false,
    animate: false,
  },
];
