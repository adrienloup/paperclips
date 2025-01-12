export interface Project {
  id: string;
  title?: string;
  text?: string;
  active?: boolean;
  onClick?: () => void;
  onAnimationEnd?: () => void;
}
