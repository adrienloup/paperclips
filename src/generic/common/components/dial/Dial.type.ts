import { Number } from '@/src/generic/common/components/number/Number.type.ts';
import { Children } from '@/src/generic/types/Children.type.ts';

export interface Dial extends Number {
  disabled?: boolean;
  label: string;
  bonus?: Children;
}
