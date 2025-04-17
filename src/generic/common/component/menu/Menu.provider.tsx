import { useCallback } from 'react';
import { useLocalStorage } from '@/src/generic/hook/useLocalStorage.ts';
import { MenuContext } from '@/src/generic/common/component/menu/Menu.context.ts';
import { Children } from '@/src/generic/type/Children.type.ts';

export function MenuProvider({ children }: { children: Children }) {
  const [menu, setMenu] = useLocalStorage<boolean>('_menu_3mma_0', false);
  const changedMenu = useCallback((open: boolean) => setMenu(open), [setMenu]);

  return <MenuContext.Provider value={[menu, changedMenu]}>{children}</MenuContext.Provider>;
}
