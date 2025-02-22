import { createContext, Dispatch } from 'react';

export const AsideContext = createContext<[boolean, Dispatch<boolean>] | null>(null);
