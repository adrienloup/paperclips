import { Action, State } from '@/src/pages/game/Game.type.ts';

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'BUY_WIRE':
      if (state.funds < state.wireCost) return state;
      return {
        ...state,
        wire: state.wire + state.wireBonus,
        wireCost: action.cost,
        funds: state.funds - action.cost,
      };
    case 'BUY_MACHINE':
      if (state.funds < state.machineCost) return state;
      return {
        ...state,
        machine: state.machine + state.machineBonus,
        machineRef: state.machineRef + 1,
        machineCost: action.cost,
        funds: Math.max(0, state.funds - action.cost),
      };
    case 'BUY_MEGAMACHINE':
      if (state.funds < state.megaMachineCost) return state;
      return {
        ...state,
        megaMachine: state.megaMachine + 1,
        megaMachineCost: action.cost,
        funds: Math.max(0, state.funds - action.cost),
      };
    case 'BUY_FACTORY':
      if (state.paperclip < state.factoryCost) return state;
      return {
        ...state,
        factory: state.factory + 1,
        factoryCost: action.cost,
        paperclip: state.paperclip - state.factoryCost,
      };
    case 'BUY_MARKETING':
      if (state.funds < state.marketingCost) return state;
      return {
        ...state,
        marketing: Math.max(1, Math.min(state.marketing + 1, 10)),
        marketingCost: Math.max(100, Math.min(state.marketingCost * 2.5, 25600)),
        funds: Math.max(0, state.funds - state.marketingCost),
      };
    case 'UPDATE_FEATURE':
      return {
        ...state,
        feature: { ...state.feature, [action.feature]: action.value },
      };
    case 'UPDATE_WIRE_COST':
      return {
        ...state,
        wireCost: action.cost,
      };
    case 'ENABLE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.id && !project.enabled ? { ...project, enabled: true } : project
        ),
      };
    case 'UNLOCK_PROJECT':
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.id ? { ...project, unlocked: true } : project
        ),
      };
    case 'DISABLE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.id ? { ...project, enabled: false } : project
        ),
        operations: Math.max(0, state.operations - action.cost),
      };
    case 'INCREASE_PAPERCLIP_PRICE':
      const increasePP = Math.min(state.paperclipPriceRef + 0.01, 1);
      return {
        ...state,
        paperclipPriceRef: increasePP,
        paperclipPrice: increasePP * state.marketingBonus,
        publicDemand: 0.1 / increasePP,
      };
    case 'DECREASE_PAPERCLIP_PRICE':
      const decreasePP = Math.max(state.paperclipPriceRef - 0.01, 0.1);
      return {
        ...state,
        paperclipPriceRef: decreasePP,
        paperclipPrice: decreasePP * state.marketingBonus,
        publicDemand: 0.1 / decreasePP,
      };
    case 'INCREASE_CASH':
      return state.funds >= 1 ? { ...state, cash: state.cash + 1, funds: state.funds - 1 } : state;
    case 'DECREASE_CASH':
      return state.cash >= 1 ? { ...state, cash: state.cash - 1, funds: state.funds + 1 } : state;
    case 'INCREASE_WALLET':
      if (state.cash <= action.price) return state;
      return {
        ...state,
        wallet: { ...state.wallet, [action.symbol]: { quantity: state.wallet[action.symbol].quantity + 0.1 } },
        cash: Math.max(0, state.cash - action.price),
      };
    case 'DECREASE_WALLET':
      return {
        ...state,
        wallet: {
          ...state.wallet,
          [action.symbol]: { quantity: Math.max(0, state.wallet[action.symbol].quantity - 0.1) },
        },
        cash: state.cash + action.price,
      };
    case 'INCREASE_MEMORY':
      if (state.memory > 100) return state;
      return {
        ...state,
        memory: Math.min(state.memory + 1, 100),
        trust: Math.max(0, state.trust - 1),
        operationsMax: state.memory * 700,
      };
    case 'INCREASE_PROCESSORS':
      if (state.processors > 100) return state;
      return {
        ...state,
        processors: Math.min(state.processors + 1, 100),
        trust: Math.max(0, state.trust - 1),
      };
    case 'SELL_UNSOLD_INVENTORY':
      if (state.unsoldInventory < 0) return state;
      const sellUnsoldInventory = Math.max(0, Math.floor(state.unsoldInventory * (1 - state.publicDemand)));
      const sellFunds = state.funds + (state.unsoldInventory - sellUnsoldInventory) * state.paperclipPrice;
      return {
        ...state,
        unsoldInventory: sellUnsoldInventory,
        funds: sellFunds,
      };
    case 'UPDATE_PER_SECOND': {
      const megaMachinePS = state.megaMachine * 5e2;
      const productionPS =
        state.wire >= state.factory
          ? state.factory
          : state.wire >= state.megaMachine + state.machine
            ? megaMachinePS + state.machine
            : state.wire >= state.megaMachine
              ? megaMachinePS
              : state.wire >= state.machine
                ? state.machine
                : 0;
      const paperclipPS = productionPS * state.unsoldInventoryBonus;
      const fundsPS = paperclipPS * state.paperclipPrice;
      const operationsPS = Math.min(state.operationsMax, state.operations + 10 * state.processors);
      const creativityPS = Math.min(100, operationsPS === state.operationsMax ? state.memory : state.creativity);
      return {
        ...state,
        operations: operationsPS,
        creativity: creativityPS,
        paperclipPerSecond: paperclipPS,
        fundsPerSecond: fundsPS,
        paperclip: state.paperclip + paperclipPS,
        unsoldInventory: state.unsoldInventory + paperclipPS,
        wire: state.wire - productionPS,
      };
    }
    case 'UPDATE_PAPERCLIP':
      if (state.wire < 0) return state;
      return {
        ...state,
        paperclip: state.paperclip + state.unsoldInventoryBonus,
        unsoldInventory: state.unsoldInventory + state.unsoldInventoryBonus,
        wire: state.wire - 1,
        paperclipPerSecond: state.paperclipPerSecond + state.unsoldInventoryBonus,
        fundsPerSecond: state.fundsPerSecond + state.unsoldInventoryBonus * state.paperclipPrice,
      };
    case 'UPDATE_SWARM_STRATEGY':
      return {
        ...state,
        swarmStrategy: action.value,
      };
    case 'UPDATE_TRUST':
      if (state.trust > 100) return state;
      return {
        ...state,
        trust: Math.max(0, Math.min(action.value, 100)),
      };
    case 'UPDATE_WIRE_BONUS':
      return {
        ...state,
        wireBonus: action.value,
      };
    case 'UPDATE_MACHINE_BONUS':
      return {
        ...state,
        machineBonus: action.value,
        machine: state.machineRef * action.value,
      };
    case 'UPDATE_MARKETING_BONUS':
      return {
        ...state,
        marketingBonus: action.value,
        paperclipPrice: state.paperclipPriceRef * action.value,
      };
    case 'UPDATE_UNSOLD_INVENTORY_BONUS':
      return {
        ...state,
        unsoldInventoryBonus: action.value,
      };
    case 'INITIALIZE':
      return {
        ...action.state,
      };
    default:
      return state;
  }
};
