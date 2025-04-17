import { State } from '@/src/page/game/component/dashboard/projects/Projects.type.ts';
import { Project } from '@/src/page/game/component/dashboard/project/Project.type.ts';

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
