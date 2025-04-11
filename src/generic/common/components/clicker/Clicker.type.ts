import { Button } from '@/src/generic/common/components/button/Button.type.ts';

export interface Clicker extends Button<HTMLButtonElement> {
  value?: number;
  onClick: () => void;
}

export interface ClickerValue {
  id: number;
  x: number;
  y: number;
}
