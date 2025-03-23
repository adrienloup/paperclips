import { createContext, Dispatch } from 'react';
import { Action, State } from '@/src/generic/common/components/alert/Alert.type.ts';

export const AlertContext = createContext<State>([]);
export const AlertDispatchContext = createContext<Dispatch<Action>>(() => {});
