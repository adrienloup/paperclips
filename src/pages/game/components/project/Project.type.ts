export interface Project {
  title: string;
  text: string;
  path: string;
  disabled: boolean;
  animate: boolean;
  onClick?: () => void;
  onAnimationEnd?: () => void;
}
