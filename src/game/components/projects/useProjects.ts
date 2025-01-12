import { useContext } from 'react';
import { ProjectsContext, ProjectsDispatchContext } from './Projects.context';

export function useProjects() {
  return useContext(ProjectsContext);
}
export function useProjectsDispatch() {
  return useContext(ProjectsDispatchContext);
}
