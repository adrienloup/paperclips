import { createContext, Dispatch } from 'react';
import { noticesState } from '@/src/pages/game/components/dashboard/notices/Notices.state.ts';
import { Action, State } from '@/src/pages/game/components/dashboard/notices/Notices.type.ts';

export const NoticesContext = createContext<State>(noticesState);
export const NoticesDispatchContext = createContext<Dispatch<Action>>(() => {});
