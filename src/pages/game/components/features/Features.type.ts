export type Action = { type: 'DISABLED'; feature: string } | { type: 'ENABLED'; feature: string };

export interface State {
  investments: boolean;
  machine: boolean;
  marketing: boolean;
  megaMachine: boolean;
  paperclipPerSecond: boolean;
  resources: boolean;
}
