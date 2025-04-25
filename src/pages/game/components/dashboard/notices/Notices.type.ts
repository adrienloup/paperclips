import { Notice } from '@/src/pages/game/components/dashboard/notice/Notice.type.ts';

export type State = Notice[];

export type Action =
  | { type: 'ENABLE'; id: string }
  | { type: 'DISABLE'; id: string }
  | { type: 'VIEW'; id: string };
