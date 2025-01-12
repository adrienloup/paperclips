import { useEffect, useReducer } from 'react';
import { useLocalStorage } from '../../../generic/hooks/useLocalStorage';
import { Children } from '../../../generic/types/Children.type';
import { ProjectsContext, ProjectsDispatchContext } from './Projects.context';
import { ProjectsReducer } from './Projects.reducer';
import { Project } from './Project.type';

export function ProjectsProvider({ children }: { children: Children }) {
  const [localProjects, setLocalProjects] = useLocalStorage<Project[]>('_projects_3mma_0', []);
  const [projects, setProjects] = useReducer(ProjectsReducer, localProjects);

  useEffect(() => {
    setLocalProjects(projects);
  }, [projects]);

  return (
    <ProjectsContext.Provider value={projects}>
      <ProjectsDispatchContext.Provider value={setProjects}>{children}</ProjectsDispatchContext.Provider>
    </ProjectsContext.Provider>
  );
}
