import { State } from '@/src/pages/game/components/notifications/Notifications.type.ts';
import { Notification } from '@/src/pages/game/components/notification/Notification.type.ts';

const notifications: Notification[] = [
  {
    id: 'game',
    enable: true,
    view: false,
  },
  {
    id: 'manufacturing',
    enable: true,
    view: false,
  },
  {
    id: 'business',
    enable: true,
    view: false,
  },
  {
    id: 'machine',
    enable: false,
    view: false,
  },
  {
    id: 'marketing',
    enable: false,
    view: false,
  },
  {
    id: 'technology',
    enable: false,
    view: false,
  },
  {
    id: 'trust',
    enable: false,
    view: false,
  },
  {
    id: 'memory',
    enable: false,
    view: false,
  },
  {
    id: 'processor',
    enable: false,
    view: false,
  },
  {
    id: 'operation',
    enable: false,
    view: false,
  },
  {
    id: 'creativity',
    enable: false,
    view: false,
  },
  {
    id: 'trust',
    enable: false,
    view: false,
  },
  {
    id: 'project',
    enable: false,
    view: false,
  },
  {
    id: 'megamachine',
    enable: false,
    view: false,
  },
];

export const notificationsState: State = {
  notifications: notifications,
  open: false,
};
