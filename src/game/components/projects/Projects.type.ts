import { State } from '@/src/game/components/dashboard/Dashboard.type.ts';

export interface Projects {
  dashboard: State;
  onRevTrackerClick: () => void;
  onImprovedProductionClick: () => void;
  onRevTrackerAnimationEnd: () => void;
  onImprovedProductionAnimationEnd: () => void;
}
