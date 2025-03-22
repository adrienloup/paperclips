import { State } from '@/src/pages/game/components/notification/Notification.type.ts';

export const initialState: State = [
  {
    id: 1,
    text: 'Start the first stage',
    path: 'stage1',
    enable: true,
    animate: true,
  },
  {
    id: 2,
    text: 'Buy the machine',
    path: 'machine',
    enable: false,
    animate: false,
  },
  {
    id: 3,
    text: 'Raise the marketing level',
    path: 'marketing',
    enable: false,
    animate: false,
  },
  {
    id: 4,
    text: 'Raise the marketing level',
    path: 'trust',
    enable: false,
    animate: false,
  },
  {
    id: 5,
    text: 'Projects are available',
    path: 'projects',
    enable: false,
    animate: false,
  },
];
