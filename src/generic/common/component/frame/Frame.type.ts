import { HTMLProps } from 'react';
import { Children } from '@/src/generic/type/Children.type.ts';

export interface Frame extends HTMLProps<HTMLDivElement> {
  children: Children;
  direction?: 'row' | 'column';
}
