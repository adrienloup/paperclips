export interface Project {
  title: string;
  text: string;
  path: string;
  animate: boolean;
  onClick?: () => void;
  onAnimationEnd?: () => void;
}
