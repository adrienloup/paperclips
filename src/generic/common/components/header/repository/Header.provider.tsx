import { useCallback } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage';
import { Children } from '@/src/generic/types/Children.type';
import { HeaderContext } from '@/src/generic/common/components/header/repository/Header.context';

export function HeaderProvider({ children }: { children: Children }) {
  const [header, setHeader] = useLocalStorage<boolean>('_3mma_0_header', false);

  const handleHeaderChange = useCallback((newHeader: boolean) => setHeader(newHeader), []);

  return (
    <HeaderContext.Provider value={[header, handleHeaderChange]}>{children}</HeaderContext.Provider>
  );
}
