import { Size } from '@/src/generic/type/Size.type.ts';
import { HTMLProps } from 'react';

export interface Progressbar extends Omit<HTMLProps<HTMLElement>, 'size'> {
  valueNow: number;
  valueMin?: number;
  valueMax?: number;
  size?: Size;
}
