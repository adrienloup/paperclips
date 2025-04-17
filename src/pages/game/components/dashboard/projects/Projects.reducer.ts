import { Action, State } from '@/src/pages/game/components/dashboard/projects/Projects.type.ts';

export const projectsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ENABLE':
      return state.map((project) =>
        project.id === action.id && !project.enable
          ? { ...project, enable: true, lock: true }
          : project
      );
    case 'DISABLE':
      return state.map((project) =>
        project.id === action.id ? { ...project, enable: false } : project
      );
    case 'UNLOCK':
      return state.map((project) =>
        project.id === action.id ? { ...project, lock: false } : project
      );
    default:
      return state;
  }
};
