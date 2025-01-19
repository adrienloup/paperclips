export interface Project {
  title: string;
  text: string;
  incurred: boolean;
  onClick: () => void;
  onAnimationEnd: () => void;
}
