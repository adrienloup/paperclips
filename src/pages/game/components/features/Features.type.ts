export type Action = { type: 'DISABLE'; feature: string } | { type: 'ENABLE'; feature: string };

export interface State {
  marketing: boolean;
  trust: boolean;
  projects: boolean;
}
