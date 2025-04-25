import { createContext, Dispatch } from 'react';
import { projectsState } from '@/src/pages/game/components/dashboard/projects/Projects.state.ts';
import { Action, State } from '@/src/pages/game/components/dashboard/projects/Projects.type.ts';

export const ProjectsContext = createContext<State>(projectsState);
export const ProjectsDispatchContext = createContext<Dispatch<Action>>(() => {});
