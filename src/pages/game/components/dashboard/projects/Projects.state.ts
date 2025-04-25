import { State } from '@/src/pages/game/components/dashboard/projects/Projects.type.ts';
import { Project } from '@/src/pages/game/components/dashboard/project/Project.type.ts';

const projects: Project[] = [
  {
    id: 'algorithmicTrading',
    enabled: false,
    unlocked: false,
  },
  {
    id: 'revTracker',
    enabled: false,
    unlocked: false,
  },
];

export const projectsState: State = projects;
