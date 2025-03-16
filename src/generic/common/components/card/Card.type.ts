import { HTMLProps } from 'react';
import { Children } from '@/src/generic/types/Children.type.ts';

export interface Card extends HTMLProps<HTMLDivElement> {
  children: Children;
}
