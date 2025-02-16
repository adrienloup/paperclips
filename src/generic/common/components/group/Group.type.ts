import { Children } from '@/src/generic/types/Children.type.ts';

export interface CardGroup {
  children: Children;
  className?: string;
  direction?: 'row' | 'column';
}
