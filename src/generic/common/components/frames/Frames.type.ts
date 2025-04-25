import { HTMLProps } from 'react';
import { Children } from '@/src/generic/types/Children.type.ts';

export interface Frames extends HTMLProps<HTMLDivElement> {
  children: Children;
  direction?: 'row' | 'column';
}
