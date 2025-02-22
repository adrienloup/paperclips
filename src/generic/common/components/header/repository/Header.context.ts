import { createContext } from 'react';
import { Header } from '@/src/generic/common/components/header/repository/Header.type';

export const HeaderContext = createContext<{
  header: Header;
  setHeader: (header: Header) => void;
}>({
  header: false,
  setHeader: (header: Header) => header,
});
