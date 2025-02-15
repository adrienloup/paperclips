import { ButtonHTMLAttributes, LinkHTMLAttributes, RefObject } from 'react';

export type ButtonAttributes<A> = ButtonHTMLAttributes<A> & LinkHTMLAttributes<A>;

export interface Button<T> extends ButtonAttributes<T> {
  href?: string;
  to?: string;
  innerRef?: RefObject<HTMLButtonElement>;
  disabled?: boolean;
  onClick?: () => void;
}
