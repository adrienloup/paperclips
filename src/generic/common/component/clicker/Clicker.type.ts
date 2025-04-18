import { Button } from '@/src/generic/common/component/button/Button.type.ts';

export interface Clicker extends Button<HTMLButtonElement> {
  value?: number;
  sign?: string;
  onClick: () => void;
}

export interface ClickerValue {
  id: number;
  x: number;
  y: number;
}
