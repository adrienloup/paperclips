import { Children } from '@/src/generic/types/Children.type.ts';

export interface Group {
  children: Children;
  className?: string;
  direction?: 'row' | 'column';
}
