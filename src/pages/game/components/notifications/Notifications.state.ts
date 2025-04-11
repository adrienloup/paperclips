import { State } from '@/src/pages/game/components/notifications/Notifications.type.ts';
import { Notification } from '@/src/pages/game/components/notification/Notification.type.ts';

const notifications: Notification[] = [
  {
    id: 'game',
    enable: true,
    view: false,
  },
  {
    id: 'paperclips',
    enable: true,
    view: false,
  },
  {
    id: 'machines',
    enable: false,
    view: false,
  },
  {
    id: 'marketing',
    enable: false,
    view: false,
  },
  {
    id: 'trust',
    enable: false,
    view: false,
  },
  {
    id: 'projects',
    enable: false,
    view: false,
  },
  {
    id: 'memory',
    enable: false,
    view: false,
  },
  {
    id: 'processors',
    enable: false,
    view: false,
  },
  {
    id: 'operations',
    enable: false,
    view: false,
  },
  {
    id: 'creativity',
    enable: false,
    view: false,
  },
  {
    id: 'megamachines',
    enable: false,
    view: false,
  },
];

export const notificationsState: State = notifications;
