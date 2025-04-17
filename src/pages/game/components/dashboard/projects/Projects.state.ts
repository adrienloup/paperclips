import { State } from '@/src/pages/game/components/dashboard/projects/Projects.type.ts';
import { Project } from '@/src/pages/game/components/dashboard/project/Project.type.ts';

const projects: Project[] = [
  {
    id: 'algorithmicTrading',
    enable: false,
    unlock: false,
  },
  {
    id: 'revTracker',
    enable: false,
    unlock: false,
  },
];

export const projectsState: State = projects;
