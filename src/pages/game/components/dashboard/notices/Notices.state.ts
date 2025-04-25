import { State } from '@/src/pages/game/components/dashboard/notices/Notices.type.ts';
import { Notice } from '@/src/pages/game/components/dashboard/notice/Notice.type.ts';

const notices: Notice[] = [
  {
    id: 'algorithmicTrading',
    enable: false,
    view: false,
  },
  {
    id: 'creativity',
    enable: false,
    view: false,
  },
  {
    id: 'funds',
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
    id: 'megaMachine',
    enable: false,
    view: false,
  },
  {
    id: 'memory',
    enable: false,
    view: false,
  },
  {
    id: 'operation',
    enable: false,
    view: false,
  },
  {
    id: 'paperclip',
    enable: true,
    view: false,
  },
  {
    id: 'paperclipCost',
    enable: true,
    view: false,
  },
  {
    id: 'processor',
    enable: false,
    view: false,
  },
  {
    id: 'project',
    enable: false,
    view: false,
  },
  {
    id: 'publicDemand',
    enable: true,
    view: false,
  },
  {
    id: 'trust',
    enable: false,
    view: false,
  },
  {
    id: 'unsold',
    enable: true,
    view: false,
  },
  {
    id: 'wire',
    enable: true,
    view: false,
  },
];

export const noticesState: State = notices;
