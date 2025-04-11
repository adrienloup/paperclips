export interface Number {
  className?: string;
  value: number;
  style?: 'currency' | 'percent';
  notation?: 'compact';
  compactDisplay?: 'short' | 'long' | undefined;
  limit?: number;
}
