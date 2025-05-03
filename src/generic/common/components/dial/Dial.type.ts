import { Number } from '@/src/generic/common/components/number/Number.type.ts';
import { Children } from '@/src/generic/types/Children.type.ts';

export interface Dial extends Number {
  bonus?: Children;
  disabled?: boolean;
  label: string;
}
