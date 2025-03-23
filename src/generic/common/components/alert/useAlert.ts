import { useContext } from 'react';
import { AlertContext, AlertDispatchContext } from '@/src/generic/common/components/alert/Alert.context.ts';

export function useAlert() {
  return useContext(AlertContext);
}

export function useAlertDispatch() {
  return useContext(AlertDispatchContext);
}
