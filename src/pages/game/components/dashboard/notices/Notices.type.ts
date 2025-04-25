import { Notice } from '@/src/pages/game/components/dashboard/notice/Notice.type.ts';

export type State = Notice[];

export type Action =
  | { type: 'ENABLED'; id: string }
  | { type: 'DISABLED'; id: string }
  | { type: 'VIEWED'; id: string };
