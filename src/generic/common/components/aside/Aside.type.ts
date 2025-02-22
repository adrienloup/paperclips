import { Children } from '@/src/generic/types/Children.type';

export interface Aside {
  children: Children;
  openLabel?: string;
  closeLabel?: string;
  icon?: string;
  onClick?: (open: boolean) => void;
}
