import { useLocalStorage } from '../../../generic/hooks/useLocalStorage';
import { Children } from '../../../generic/types/Children.type';
import { DashboardContext, DashboardDispatchContext } from './Dashboard.context';
import { Dashboard } from './Dashboard.type';
import { initialState } from './Dashboard.state';

export function DashboardProvider({ children }: { children: Children }) {
  const [dashboard, setDashboard] = useLocalStorage<Dashboard>('_dashboard_3mma_0', initialState);

  return (
    <DashboardContext.Provider value={dashboard}>
      <DashboardDispatchContext.Provider value={setDashboard}>{children}</DashboardDispatchContext.Provider>
    </DashboardContext.Provider>
  );
}
