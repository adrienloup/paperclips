export type Action = { type: 'DISABLE'; feature: string } | { type: 'ENABLE'; feature: string };

export interface State {
  machine: boolean;
  resources: boolean;
}
