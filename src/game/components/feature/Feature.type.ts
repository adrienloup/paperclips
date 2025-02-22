import { ReactNode } from 'react';

export interface Feature {
  children: ReactNode;
  animate: boolean;
  onAnimationEnd: () => void;
}
