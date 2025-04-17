import { HTMLProps } from 'react';
import { Children } from '@/src/generic/type/Children.type.ts';

export interface Card extends HTMLProps<HTMLDivElement> {
  children: Children;
}
