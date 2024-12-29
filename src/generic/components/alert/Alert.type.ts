export interface Alert {
  id: string;
  label?: string;
  duration?: number;
  onClick?: () => void;
}
