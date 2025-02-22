import { useContext } from 'react';
import { HeaderContext } from '@/src/generic/common/components/header/repository/Header.context';

export function useHeader() {
  return useContext(HeaderContext);
}
