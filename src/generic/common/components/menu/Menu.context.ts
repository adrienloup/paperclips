import { createContext, Dispatch } from 'react';

export const MenuContext = createContext<[boolean, Dispatch<boolean>]>([false, () => {}]);
