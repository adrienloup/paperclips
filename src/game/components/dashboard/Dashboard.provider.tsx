import { useCallback, useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage';
import { Children } from '@/src/generic/types/Children.type';
import { State } from '@/src/game/components/dashboard/Dashboard.type';
import {
  DashboardContext,
  DashboardDispatchContext,
} from '@/src/game/components/dashboard/Dashboard.context';
import { dashboardReducer } from '@/src/game/components/dashboard/Dashboard.reducer';
import { initialState } from '@/src/game/components/dashboard/Dashboard.state';

export function DashboardProvider({ children }: { children: Children }) {
  const [state, setState] = useLocalStorage<State>('_3mma_0_dashboard', initialState);
  const [dashboard, setDashboard] = useReducer(dashboardReducer, state);

  const update = useCallback(() => {
    setState(dashboard);
  }, [dashboard, setState]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <DashboardContext.Provider value={dashboard}>
      <DashboardDispatchContext.Provider value={setDashboard}>
        {children}
      </DashboardDispatchContext.Provider>
    </DashboardContext.Provider>
  );
}
