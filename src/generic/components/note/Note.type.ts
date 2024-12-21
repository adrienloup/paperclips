export interface Note {
  id: string;
  label?: string;
  enable?: boolean;
  onAnimationEnd?: () => void;
}
