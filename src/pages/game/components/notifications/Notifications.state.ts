import { State } from '@/src/pages/game/components/notifications/Notifications.type.ts';
import { Notification } from '@/src/pages/game/components/notification/Notification.type.ts';

const notifications: Notification[] = [
  {
    id: 'paperclip',
    enable: true,
    view: false,
  },
  {
    id: 'wire',
    enable: true,
    view: false,
  },
  {
    id: 'funds',
    enable: true,
    view: false,
  },
  {
    id: 'unsold',
    enable: true,
    view: false,
  },
  {
    id: 'paperclipCost',
    enable: true,
    view: false,
  },
  {
    id: 'publicDemand',
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
    id: 'megaMachine',
    enable: false,
    view: false,
  },
];

export const notificationsState: State = notifications;
