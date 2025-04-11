import { useContext } from 'react';
import {
  AlertsContext,
  AlertsDispatchContext,
} from '@/src/generic/common/components/alerts/Alerts.context.ts';

export const useAlerts = () => useContext(AlertsContext);
export const useAlertsDispatch = () => useContext(AlertsDispatchContext);
