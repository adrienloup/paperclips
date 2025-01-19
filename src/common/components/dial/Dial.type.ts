import { Number } from '@/src/common/components/number/Number.type.ts';

export interface Dial extends Number {
  outStock?: boolean;
  label?: string;
}
