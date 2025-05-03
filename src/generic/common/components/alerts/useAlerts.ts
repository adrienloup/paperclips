import { useContext } from 'react';
import { AlertsDispatchContext } from '@/src/generic/common/components/alerts/Alerts.context.ts';

export const useAlertsDispatch = () => useContext(AlertsDispatchContext);
