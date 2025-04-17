import { Project } from '@/src/page/game/component/dashboard/project/Project.type.ts';

export type State = Project[];

export type Action =
  | { type: 'ENABLE'; id: string }
  | { type: 'DISABLE'; id: string }
  | { type: 'UNLOCK'; id: string };
