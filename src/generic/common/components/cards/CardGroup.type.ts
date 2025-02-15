import { Children } from '@/src/generic/types/Children.type';

export interface CardGroup {
  children: Children;
  className?: string;
  direction?: 'row' | 'column';
}
