import { State } from '@/src/pages/game/components/dashboard/notices/Notices.type.ts';
import { Notice } from '@/src/pages/game/components/dashboard/notice/Notice.type.ts';

const notices: Notice[] = [
  {
    id: 'algorithmicTrading',
    enabled: false,
    viewed: false,
  },
  {
    id: 'creativity',
    enabled: false,
    viewed: false,
  },
  {
    id: 'funds',
    enabled: true,
    viewed: false,
  },
  {
    id: 'machine',
    enabled: false,
    viewed: false,
  },
  {
    id: 'marketing',
    enabled: false,
    viewed: false,
  },
  {
    id: 'megaMachine',
    enabled: false,
    viewed: false,
  },
  {
    id: 'memory',
    enabled: false,
    viewed: false,
  },
  {
    id: 'operation',
    enabled: false,
    viewed: false,
  },
  {
    id: 'paperclip',
    enabled: true,
    viewed: false,
  },
  {
    id: 'paperclipCost',
    enabled: true,
    viewed: false,
  },
  {
    id: 'processor',
    enabled: false,
    viewed: false,
  },
  {
    id: 'project',
    enabled: false,
    viewed: false,
  },
  {
    id: 'publicDemand',
    enabled: true,
    viewed: false,
  },
  {
    id: 'trust',
    enabled: false,
    viewed: false,
  },
  {
    id: 'unsold',
    enabled: true,
    viewed: false,
  },
  {
    id: 'wire',
    enabled: true,
    viewed: false,
  },
];

export const noticesState: State = notices;
