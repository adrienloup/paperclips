import { useContext } from 'react';
import { HeaderContext } from '@/src/common/components/header/Header.context';

export function useHeader() {
  return useContext(HeaderContext);
}
