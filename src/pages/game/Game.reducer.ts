import { Action, State } from '@/src/pages/game/Game.type.ts';

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...action.state,
      };
    case 'SELL_UNSOLD':
      if (state.unsold <= 0) return state;
      // console.log('SELL_UNSOLD');
      const sellUnsold = Math.max(0, Math.floor(state.unsold * (1 - state.publicDemand)));
      const sellFunds = state.funds + (state.unsold - sellUnsold) * state.paperclipsCost;
      return {
        ...state,
        unsold: sellUnsold,
        funds: sellFunds,
      };
    case 'BUY_WIRE':
      if (state.funds <= 0) return state;
      return {
        ...state,
        wire: state.wire + state.wireBonus,
        wireCost: state.wireCost + (Math.random() * (1.25 - 0.25) + 0.25), // entre ≥ 0.25 et < 1.25
        funds: state.funds - state.wireCost,
      };
    case 'BUY_MARKETING':
      // console.log('BUY_MARKETING');
      if (state.funds <= 0) return state;
      const updateMarketing = Math.max(1, Math.min(state.marketing + 1, 10));
      const updateFunds = Math.max(0, state.funds - state.marketingCost);
      const updateMarketingCost = Math.max(100, Math.min(state.marketingCost * 2, 25600));
      return {
        ...state,
        marketing: updateMarketing,
        marketingCost: updateMarketingCost,
        funds: updateFunds,
        paperclipsCost: state.paperclipsCostRef * updateMarketing,
      };
    case 'BUY_MACHINES':
      if (state.funds <= 0) return state;
      return {
        ...state,
        machines: state.machines + 1,
        machinesCost: state.machinesCost + (Math.random() * (10 - 5) + 5), // entre ≥ 5 et < 10
        funds: Math.max(0, state.funds - state.machinesCost),
      };
    case 'BUY_MEGAMACHINES':
      if (state.funds <= 0) return state;
      return {
        ...state,
        megamachines: state.megamachines + 1,
        megamachinesCost: state.megamachinesCost + 11e2,
        funds: Math.max(0, state.funds - state.megamachinesCost),
      };
    case 'INCREASE_PAPERCLIPS_COST':
      const increasePaperclipsCostRef = Math.min(state.paperclipsCostRef + 0.01, 1);
      return {
        ...state,
        paperclipsCostRef: increasePaperclipsCostRef,
        paperclipsCost: increasePaperclipsCostRef * state.marketing,
        publicDemand: 0.1 / increasePaperclipsCostRef,
      };
    case 'DECREASE_PAPERCLIPS_COST':
      const decreasePaperclipsCost = Math.max(state.paperclipsCostRef - 0.01, 0.1);
      return {
        ...state,
        paperclipsCostRef: decreasePaperclipsCost,
        paperclipsCost: decreasePaperclipsCost * state.marketing,
        publicDemand: 0.1 / decreasePaperclipsCost,
      };
    case 'UPDATE_PER_SECOND': {
      // console.log('UPDATE_PER_SECOND');
      const megamachinesPerSecond = state.megamachines * 5e2;
      const machinesPerSecond =
        state.wire >= megamachinesPerSecond + state.machines
          ? megamachinesPerSecond + state.machines
          : state.wire >= megamachinesPerSecond
            ? megamachinesPerSecond
            : state.wire >= state.machines
              ? state.machines
              : 0;
      const paperclipsPerSecond = machinesPerSecond * state.unsoldBonus;
      const fundsPerSecond = paperclipsPerSecond * state.paperclipsCost;
      return {
        ...state,
        paperclipsPerSecond: paperclipsPerSecond,
        fundsPerSecond: fundsPerSecond,
        paperclips: state.paperclips + paperclipsPerSecond,
        unsold: state.unsold + paperclipsPerSecond,
        wire: state.wire - machinesPerSecond,
      };
    }
    case 'UPDATE_PAPERCLIPS':
      if (state.wire <= 0) return state;
      return {
        ...state,
        paperclips: state.paperclips + state.unsoldBonus,
        unsold: state.unsold + state.unsoldBonus,
        wire: state.wire - 1,
        paperclipsPerSecond: state.paperclipsPerSecond + state.unsoldBonus,
        fundsPerSecond: state.fundsPerSecond + state.unsoldBonus * state.paperclipsCost,
      };
    case 'UPDATE_WIRE_COST':
      return {
        ...state,
        wireCost: state.wireCost > 10 ? state.wireCost - 0.22 : Math.random() * (20 - 12) + 12, // entre ≥ 12 et < 20
      };
    case 'UPDATE_WIRE_BONUS':
      return {
        ...state,
        wireBonus: action.bonus,
      };
    case 'UPDATE_UNSOLD_BONUS':
      return {
        ...state,
        unsoldBonus: action.bonus,
      };
    default:
      return state;
  }
};
