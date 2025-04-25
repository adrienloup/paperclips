import { Project } from '@/src/pages/game/components/dashboard/project/Project.type.ts';

export type State = Project[];

export type Action =
  | { type: 'ENABLED'; id: string }
  | { type: 'DISABLED'; id: string }
  | { type: 'UNLOCKED'; id: string };
