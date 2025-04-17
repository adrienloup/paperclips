import { useContext } from 'react';
import {
  ProjectsContext,
  ProjectsDispatchContext,
} from '@/src/page/game/component/dashboard/projects/Projects.context.ts';

export const useProjects = () => useContext(ProjectsContext);
export const useProjectsDispatch = () => useContext(ProjectsDispatchContext);
