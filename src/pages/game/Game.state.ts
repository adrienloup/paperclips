import { State } from '@/src/pages/game/Game.type.ts';

export const gameState: State = {
  funds: 0,
  fundsPerSecond: 0,
  machines: 0,
  machinesCost: 5,
  marketing: 1,
  marketingCost: 100,
  megamachines: 0,
  megamachinesCost: 5e2,
  paperclips: 0,
  paperclipsCost: 0.2,
  paperclipsCostRef: 0.2,
  paperclipsPerSecond: 0,
  publicDemand: 0.5,
  unsold: 0,
  unsoldBonus: 1,
  wire: 100,
  wireBonus: 100,
  wireCost: 20,
};
