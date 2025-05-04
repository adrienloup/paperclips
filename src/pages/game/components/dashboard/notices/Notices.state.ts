import { State } from '@/src/pages/game/components/dashboard/notices/Notices.type.ts';
import { Notice } from '@/src/pages/game/components/dashboard/notice/Notice.type.ts';

const notices: Notice[] = [
  {
    id: 'paperclip',
    enabled: true,
    viewed: false,
  },
  {
    id: 'manufacturing',
    enabled: true,
    viewed: false,
  },
  {
    id: 'business',
    enabled: true,
    viewed: false,
  },
  {
    id: 'resources',
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
    id: 'projects',
    enabled: false,
    viewed: false,
  },
  {
    id: 'investments',
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
