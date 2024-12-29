import { useContext } from 'react';
import { AlertContext, AlertDispatchContext } from './Alert.context';

export function useAlert() {
  return useContext(AlertContext);
}

export function useAlertDispatch() {
  return useContext(AlertDispatchContext);
}
