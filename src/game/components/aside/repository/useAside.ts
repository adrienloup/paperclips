import { useContext } from 'react';
import { AsideContext } from '@/src/game/components/aside/repository/Aside.context';

export function useAside() {
  return useContext(AsideContext);
}
