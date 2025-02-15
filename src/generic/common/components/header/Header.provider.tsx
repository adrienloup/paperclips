import { useEffect } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage';
import { Children } from '@/src/generic/types/Children.type';
import { Header } from '@/src/generic/common/components/header/Header.type';
import { HeaderContext } from '@/src/generic/common/components/header/Header.context';

export function HeaderProvider({ children }: { children: Children }) {
  const [header, setHeader] = useLocalStorage<Header>('_3mma_0_header', false);

  useEffect(() => {
    setHeader(header);
  }, [header]);

  return <HeaderContext.Provider value={{ header, setHeader }}>{children}</HeaderContext.Provider>;
}
