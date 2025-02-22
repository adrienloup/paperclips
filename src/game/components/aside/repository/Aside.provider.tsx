import { useCallback } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage';
import { Children } from '@/src/generic/types/Children.type';
import { AsideContext } from '@/src/game/components/aside/repository/Aside.context';

export function AsideProvider({ children }: { children: Children }) {
  const [aside, setAside] = useLocalStorage<boolean>('_3mma_0_aside', false);

  const updateAside = useCallback(
    (newAside: boolean) => {
      setAside(newAside);
    },
    [setAside]
  );

  const onAsideChange = useCallback((newAside: boolean) => {
    updateAside(newAside);
  }, []);

  return <AsideContext.Provider value={[aside, onAsideChange]}>{children}</AsideContext.Provider>;
}
