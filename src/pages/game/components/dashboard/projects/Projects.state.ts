import { State } from '@/src/pages/game/components/dashboard/projects/Projects.type.ts';
import { Project } from '@/src/pages/game/components/dashboard/project/Project.type.ts';

const projects: Project[] = [
  {
    id: 'revTracker',
    enabled: false,
    unlocked: false,
    cost: 500,
  },
  {
    id: 'begForMoreWire',
    enabled: false,
    unlocked: false,
    cost: 250,
  },
  {
    id: 'algorithmicTrading',
    enabled: false,
    unlocked: false,
    cost: 1e4,
  },
];

export const projectsState: State = projects;
