import { State } from '@/src/pages/game/components/dashboard/notices/Notices.type.ts';
import { Notice } from '@/src/pages/game/components/dashboard/notice/Notice.type.ts';

const notices: Notice[] = [
  {
    id: 'paperclip',
    enabled: false,
    viewed: false,
  },
  {
    id: 'wire',
    enabled: false,
    viewed: false,
  },
  {
    id: 'funds',
    enabled: false,
    viewed: false,
  },
  {
    id: 'unsoldInventory',
    enabled: false,
    viewed: false,
  },
  {
    id: 'publicDemand',
    enabled: false,
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
    id: 'trust',
    enabled: false,
    viewed: false,
  },
  {
    id: 'memory',
    enabled: false,
    viewed: false,
  },
  {
    id: 'processor',
    enabled: false,
    viewed: false,
  },
  {
    id: 'operation',
    enabled: false,
    viewed: false,
  },
  {
    id: 'creativity',
    enabled: false,
    viewed: false,
  },
  {
    id: 'projects',
    enabled: false,
    viewed: false,
  },
  {
    id: 'revTracker',
    enabled: false,
    viewed: false,
  },
  {
    id: 'algorithmicTrading',
    enabled: false,
    viewed: false,
  },
  {
    id: 'investments',
    enabled: false,
    viewed: false,
  },
  {
    id: 'begForMoreWire',
    enabled: false,
    viewed: false,
  },
];

export const noticesState: State = notices;
