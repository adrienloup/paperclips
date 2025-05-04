import { Projects } from '@/src/pages/game/components/dashboard/projects/Projects.type.ts';
import { Wallet } from '@/src/pages/game/components/dashboard/investments/wallet/Wallet.type.ts';

export type Action =
  | { type: 'BUY_WIRE'; cost: number }
  | { type: 'BUY_MACHINE'; cost: number }
  | { type: 'BUY_MEGAMACHINE'; cost: number }
  | { type: 'BUY_FACTORY'; cost: number }
  | { type: 'UPDATE_FEATURE'; feature: string; value: boolean }
  | { type: 'UPDATE_WIRE_COST'; cost: number }
  | { type: 'ENABLE_PROJECT'; id: string }
  | { type: 'UNLOCK_PROJECT'; id: string }
  | { type: 'DISABLE_PROJECT'; id: string; cost: number }
  | { type: 'SELL_UNSOLD_INVENTORY' }
  | { type: 'BUY_MARKETING' }
  | { type: 'INCREASE_PAPERCLIP_COST' }
  | { type: 'DECREASE_PAPERCLIP_COST' }
  | { type: 'INCREASE_CASH' }
  | { type: 'DECREASE_CASH' }
  | { type: 'INCREASE_WALLET'; symbol: string; price: number }
  | { type: 'DECREASE_WALLET'; symbol: string; price: number }
  | { type: 'INCREASE_MEMORY' }
  | { type: 'INCREASE_PROCESSOR' }
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'UPDATE_PAPERCLIP' }
  | { type: 'UPDATE_TRUST'; value: number }
  | { type: 'UPDATE_WIRE_BONUS'; value: number }
  | { type: 'UPDATE_MACHINE_BONUS'; value: number }
  | { type: 'UPDATE_UNSOLD_INVENTORY_BONUS'; value: number }
  | { type: 'INITIALIZE'; state: State };

export interface State {
  cash: number;
  creativity: number;
  factory: number;
  factoryCost: number;
  feature: {
    factory: boolean;
    fundsPerSecond: boolean;
    investments: boolean;
    machine: boolean;
    marketing: boolean;
    megaMachine: boolean;
    production: boolean;
    resources: boolean;
    trust: boolean;
    wire: boolean;
  };
  funds: number;
  fundsPerSecond: number;
  harvesterDrone: number;
  harvesterDroneCost: number;
  machine: number;
  machineBonus: number;
  machineCost: number;
  machineRef: number;
  marketing: number;
  marketingCost: number;
  megaMachine: number;
  megaMachineCost: number;
  memory: number;
  operation: number;
  operationMax: number;
  paperclip: number;
  paperclipPrice: number;
  paperclipPriceRef: number;
  paperclipPerSecond: number;
  processor: number;
  projects: Projects;
  publicDemand: number;
  swarmGifts: number;
  trust: number;
  unsoldInventory: number;
  unsoldInventoryBonus: number;
  wallet: Wallet;
  wire: number;
  wireBonus: number;
  wireCost: number;
  wireDrone: number;
  wireDroneCost: number;
}
