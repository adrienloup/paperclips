import { HTMLProps } from 'react';

export interface Title extends HTMLProps<HTMLElement> {
  title: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
