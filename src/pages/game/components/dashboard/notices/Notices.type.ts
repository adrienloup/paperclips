import { Notice } from '@/src/pages/game/components/dashboard/notices/notice/Notice.type.ts';

export type State = Notice[];

export type Action =
  | { type: 'ENABLE_NOTICE'; id: string }
  | { type: 'DISABLE_NOTICE'; id: string }
  | { type: 'VIEW_NOTICE'; id: string };
