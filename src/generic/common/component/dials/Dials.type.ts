import { Children } from '@/src/generic/type/Children.type.ts';

export interface Dials {
  children: Children;
  className?: string;
  direction?: 'row' | 'column';
}
