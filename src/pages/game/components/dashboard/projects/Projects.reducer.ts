import { Action, State } from '@/src/pages/game/components/dashboard/projects/Projects.type.ts';

export const projectsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ENABLED':
      return state.map((project) =>
        project.id === action.id && !project.enabled ? { ...project, enabled: true } : project
      );
    case 'DISABLED':
      return state.map((project) =>
        project.id === action.id ? { ...project, enabled: false } : project
      );
    case 'UNLOCKED':
      return state.map((project) =>
        project.id === action.id ? { ...project, unlocked: true } : project
      );
    default:
      return state;
  }
};
