import { useEffect, useMemo, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hook/useLocalStorage.ts';
import { projectsReducer } from '@/src/page/game/component/dashboard/projects/Projects.reducer.ts';
import {
  ProjectsContext,
  ProjectsDispatchContext,
} from '@/src/page/game/component/dashboard/projects/Projects.context.ts';
import { projectsState } from '@/src/page/game/component/dashboard/projects/Projects.state.ts';
import { State } from '@/src/page/game/component/dashboard/projects/Projects.type.ts';
import { Children } from '@/src/generic/type/Children.type.ts';

export function ProjectsProvider({ children }: { children: Children }) {
  const [storedState, setStoredState] = useLocalStorage<State>('_projects_3mma_0', projectsState);
  const initialState = useMemo(() => storedState ?? projectsState, [storedState]);
  const [state, dispatch] = useReducer(projectsReducer, initialState);

  useEffect(() => {
    setStoredState(state);
  }, [state, setStoredState]);

  return (
    <ProjectsContext.Provider value={state}>
      <ProjectsDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectsDispatchContext.Provider>
    </ProjectsContext.Provider>
  );
}
