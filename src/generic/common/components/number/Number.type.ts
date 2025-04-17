export interface Number {
  className?: string;
  value: number;
  valueMax?: number;
  style?: 'currency' | 'percent';
  notation?: 'compact';
  compactDisplay?: 'short' | 'long' | undefined;
}
