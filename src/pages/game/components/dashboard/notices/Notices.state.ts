import { State } from '@/src/pages/game/components/dashboard/notices/Notices.type.ts';
import { Notice } from '@/src/pages/game/components/dashboard/notice/Notice.type.ts';

const notices: Notice[] = [
  {
    id: 'paperclip', // 1
    enabled: true,
    viewed: false,
  },
  {
    id: 'wire', // 2
    enabled: true,
    viewed: false,
  },
  {
    id: 'funds', // 3
    enabled: true,
    viewed: false,
  },
  {
    id: 'unsold', // 4
    enabled: true,
    viewed: false,
  },
  {
    id: 'publicDemand', // 5
    enabled: true,
    viewed: false,
  },
  {
    id: 'machine', // 6
    enabled: false,
    viewed: false,
  },
  {
    id: 'marketing', // 7
    enabled: false,
    viewed: false,
  },
  {
    id: 'trust', // 8
    enabled: false,
    viewed: false,
  },
  {
    id: 'memory', // 9
    enabled: false,
    viewed: false,
  },
  {
    id: 'processor', // 10
    enabled: false,
    viewed: false,
  },
  {
    id: 'operation', // 11
    enabled: false,
    viewed: false,
  },
  {
    id: 'creativity', // 12
    enabled: false,
    viewed: false,
  },
  // {
  //   id: 'project', // 13 ?
  //   enabled: false,
  //   viewed: false,
  // },
  {
    id: 'revTracker', // 13
    enabled: false,
    viewed: false,
  },
  {
    id: 'algorithmicTrading',
    enabled: false,
    viewed: false,
  },
  {
    id: 'megaMachine',
    enabled: false,
    viewed: false,
  },
];

export const noticesState: State = notices;
