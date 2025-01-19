import { State } from '@/src/game/components/dashboard/Dashboard.type';

export interface Business {
  dashboard: State;
  decreaseClipCost: () => void;
  increaseClipCost: () => void;
  updateMarketing: () => void;
}
