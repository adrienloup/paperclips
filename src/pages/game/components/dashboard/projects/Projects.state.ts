import { State } from '@/src/pages/game/components/dashboard/projects/Projects.type.ts';
import { Project } from '@/src/pages/game/components/dashboard/project/Project.type.ts';

const projects: Project[] = [
  {
    id: 'revTracker',
    enable: false,
    lock: true,
  },
];

export const projectsState: State = projects;
