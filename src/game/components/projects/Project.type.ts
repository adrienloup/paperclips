export interface Project {
  title: string;
  text: string;
  animate: boolean;
  onClick: () => void;
  onAnimationEnd: () => void;
}
