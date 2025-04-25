import { useContext } from 'react';
import { MenuContext } from '@/src/generic/common/components/menu/Menu.context.ts';

export const useMenu = () => useContext(MenuContext);
