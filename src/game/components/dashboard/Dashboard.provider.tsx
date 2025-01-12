import { useEffect, useReducer } from 'react';
import { useLocalStorage } from '../../../generic/hooks/useLocalStorage';
import { Children } from '../../../generic/types/Children.type';
import { DashboardContext, DashboardDispatchContext } from './Dashboard.context';
import { Dashboard } from './Dashboard.type';
import { initialState } from './Dashboard.state';
import { dashboardReducer } from './Dashboard.reducer';

export function DashboardProvider({ children }: { children: Children }) {
  const [localDashboard, setLocalDashboard] = useLocalStorage<Dashboard>('_dashboard_3mma_0', initialState);
  const [dashboard, setDashboard] = useReducer(dashboardReducer, localDashboard);

  useEffect(() => {
    setLocalDashboard(dashboard);
  }, [dashboard]);

  return (
    <DashboardContext.Provider value={dashboard}>
      <DashboardDispatchContext.Provider value={setDashboard}>{children}</DashboardDispatchContext.Provider>
    </DashboardContext.Provider>
  );
}
