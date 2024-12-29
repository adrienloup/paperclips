import { createContext, Dispatch } from 'react';
import { Alert } from './Alert.type';

export const AlertContext = createContext<Alert[]>([]);

export const AlertDispatchContext = createContext<
  Dispatch<{ id: string; label?: string; duration?: number; type: string }>
>(() => {});
