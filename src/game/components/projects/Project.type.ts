export interface Project {
  title: string;
  text: string;
  active: boolean;
  onClick: () => void;
  onAnimationEnd: () => void;
}
