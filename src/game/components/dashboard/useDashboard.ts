import { useContext } from 'react';
import {
  DashboardContext,
  DashboardDispatchContext,
} from '@/src/game/components/dashboard/Dashboard.context';

export function useDashboard() {
  return useContext(DashboardContext);
}
export function useDashboardDispatch() {
  return useContext(DashboardDispatchContext);
}
