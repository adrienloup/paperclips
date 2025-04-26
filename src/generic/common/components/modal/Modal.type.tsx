import { Children } from '@/src/generic/types/Children.type.ts';

export interface Modal {
  children: Children;
  className?: string;
  labelledby?: string;
  modal: boolean;
  onClick: () => void;
}
