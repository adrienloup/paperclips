import { useContext } from 'react';
import { AsideContext } from '@/src/generic/common/components/aside/repository/Aside.context.ts';

export function useAside() {
  return useContext(AsideContext);
}
