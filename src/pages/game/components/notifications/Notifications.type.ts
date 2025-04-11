import { Notification } from '@/src/pages/game/components/notification/Notification.type.ts';

export type State = Notification[];

export type Action =
  | { type: 'ENABLE'; id: string }
  | { type: 'DISABLE'; id: string }
  | { type: 'VIEW'; id: string };
