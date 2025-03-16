export interface Number {
  className?: string;
  value: number;
  style?: 'currency' | 'percent';
  notation?: 'compact';
  limit?: number;
}
