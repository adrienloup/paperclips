export type Action = { type: 'DISABLE'; feature: string } | { type: 'ENABLE'; feature: string };

export interface State {
  marketing: boolean;
  autoClippers: boolean;
  trust: boolean;
  projects: boolean;
}
