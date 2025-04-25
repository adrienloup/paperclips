export type Action = { type: 'DISABLE'; feature: string } | { type: 'ENABLE'; feature: string };

export interface State {
  investments: boolean;
  machine: boolean;
  marketing: boolean;
  megaMachine: boolean;
  paperclipPerSecond: boolean;
  resources: boolean;
}
