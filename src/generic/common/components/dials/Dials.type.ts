import { Children } from '@/src/generic/types/Children.type.ts';

export interface Dials {
  children: Children;
  className?: string;
  direction?: 'row' | 'column';
}
