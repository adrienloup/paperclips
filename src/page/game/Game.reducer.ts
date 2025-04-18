import { Action, State } from '@/src/page/game/Game.type.ts';

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SELL_UNSOLD':
      if (state.unsold <= 0) return state;
      // console.log('SELL_UNSOLD');
      const sellUnsold = Math.max(0, Math.floor(state.unsold * (1 - state.publicDemand)));
      const sellFunds = state.funds + (state.unsold - sellUnsold) * state.paperclipCost;
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
      // if (state.funds <= 0) return state;
      const updateMarketing = Math.max(1, Math.min(state.marketing + 1, 10));
      return {
        ...state,
        marketing: updateMarketing,
        marketingCost: Math.max(100, Math.min(state.marketingCost * 2.5, 25600)),
        funds: Math.max(0, state.funds - state.marketingCost),
        paperclipCost: state.paperclipCostRef * updateMarketing,
      };
    case 'BUY_MACHINE':
      if (state.funds <= 0) return state;
      return {
        ...state,
        machine: state.machine + 1,
        machineCost: state.machineCost + (Math.random() * (10 - 5) + 5), // entre ≥ 5 et < 10
        funds: Math.max(0, state.funds - state.machineCost),
      };
    case 'BUY_MEGAMACHINE':
      if (state.funds <= 0) return state;
      return {
        ...state,
        megaMachine: state.megaMachine + 1,
        megaMachineCost: state.megaMachineCost + 11e2,
        funds: Math.max(0, state.funds - state.megaMachineCost),
      };
    case 'INCREASE_PAPERCLIP_COST':
      const increasePaperclipCostRef = Math.min(state.paperclipCostRef + 0.01, 1);
      return {
        ...state,
        paperclipCostRef: increasePaperclipCostRef,
        paperclipCost: increasePaperclipCostRef * state.marketing,
        publicDemand: 0.1 / increasePaperclipCostRef,
      };
    case 'DECREASE_PAPERCLIP_COST':
      const decreasePaperclipCost = Math.max(state.paperclipCostRef - 0.01, 0.1);
      return {
        ...state,
        paperclipCostRef: decreasePaperclipCost,
        paperclipCost: decreasePaperclipCost * state.marketing,
        publicDemand: 0.1 / decreasePaperclipCost,
      };
    case 'INCREASE_MEMORY':
      return {
        ...state,
        memory: Math.min(state.memory + 1, 20),
        trust: Math.max(2, state.trust - 1),
      };
    case 'INCREASE_PROCESSOR':
      return {
        ...state,
        processor: Math.min(state.processor + 1, 80),
        trust: Math.max(2, state.trust - 1),
      };
    case 'UPDATE_PER_SECOND': {
      const megaMachinePerSecond = state.megaMachine * 5e2;
      const machinePerSecond =
        state.wire >= megaMachinePerSecond + state.machine
          ? megaMachinePerSecond + state.machine
          : state.wire >= megaMachinePerSecond
            ? megaMachinePerSecond
            : state.wire >= state.machine
              ? state.machine
              : 0;
      const paperclipPerSecond = machinePerSecond * state.unsoldBonus;
      const fundsPerSecond = paperclipPerSecond * state.paperclipCost;
      const operationMaxPerSecond = (state.memory * 1e6) / 20;
      const operationPerSecond = Math.min(
        operationMaxPerSecond,
        state.operation + 10 * state.processor
      );
      const creativityMaxPerSecond =
        operationPerSecond !== operationMaxPerSecond ? state.creativity + 1 : 0;
      const creativityPerSecond =
        operationPerSecond === operationMaxPerSecond && state.creativity < state.creativityMax
          ? state.creativity + 1
          : state.creativity;
      return {
        ...state,
        operation: operationPerSecond,
        operationMax: operationMaxPerSecond,
        creativity: creativityPerSecond,
        creativityMax: creativityMaxPerSecond,
        paperclipPerSecond: paperclipPerSecond,
        fundsPerSecond: fundsPerSecond,
        paperclip: state.paperclip + paperclipPerSecond,
        unsold: state.unsold + paperclipPerSecond,
        wire: state.wire - machinePerSecond,
      };
    }
    case 'UPDATE_PAPERCLIP':
      if (state.wire <= 0) return state;
      return {
        ...state,
        paperclip: state.paperclip + state.unsoldBonus,
        unsold: state.unsold + state.unsoldBonus,
        wire: state.wire - 1,
        paperclipPerSecond: state.paperclipPerSecond + state.unsoldBonus,
        fundsPerSecond: state.fundsPerSecond + state.unsoldBonus * state.paperclipCost,
      };
    case 'UPDATE_WIRE_COST':
      return {
        ...state,
        wireCost: state.wireCost > 10 ? state.wireCost - 0.22 : Math.random() * (20 - 12) + 12, // entre ≥ 12 et < 20
      };
    case 'UPDATE_TRUST':
      // if (state.trust >= 100) return state;
      return {
        ...state,
        trust: Math.max(2, Math.min(action.value, 100)),
        trustCost: Math.max(3000, Math.min(action.value * 2500, 247000)),
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
    case 'INITIALIZE':
      return {
        ...action.state,
      };
    default:
      return state;
  }
};
