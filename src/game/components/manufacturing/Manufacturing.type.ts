import { State } from '@/src/game/components/dashboard/Dashboard.type';

export interface Manufacturing {
  dashboard: State;
  makeClip: () => void;
  buyAutoClippers: () => void;
  buyWire: () => void;
}
