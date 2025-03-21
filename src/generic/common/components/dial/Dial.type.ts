import { Number } from '@/src/generic/common/components/number/Number.type.ts';

export interface Dial extends Number {
  disabled?: boolean;
  label: string;
}
