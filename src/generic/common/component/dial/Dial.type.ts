import { Number } from '@/src/generic/common/component/number/Number.type.ts';
import { Children } from '@/src/generic/type/Children.type.ts';

export interface Dial extends Number {
  disabled?: boolean;
  label: string;
  bonus?: Children;
}
