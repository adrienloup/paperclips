import { Action, State } from '@/src/pages/game/Game.type.ts';

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'BUY_WIRE':
      if (state.funds < state.wireCost) return state;
      return {
        ...state,
        wire: state.wire + state.wireBonus,
        wireCost: action.cost,
        funds: state.funds - state.wireCost,
      };
    case 'BUY_MACHINE':
      if (state.funds < state.machineCost || state.wire <= 0) return state;
      return {
        ...state,
        machine: state.machine + 1,
        machineCost: action.cost,
        funds: Math.max(0, state.funds - state.machineCost),
      };
    case 'BUY_MEGAMACHINE':
      if (state.funds < state.megaMachineCost || state.wire <= 0) return state;
      return {
        ...state,
        megaMachine: state.megaMachine + 1,
        megaMachineCost: action.cost,
        funds: Math.max(0, state.funds - state.megaMachineCost),
      };
    case 'BUY_FACTORY':
      if (state.paperclip < state.factoryCost) return state;
      return {
        ...state,
        factory: state.factory + 1,
        factoryCost: action.cost,
        paperclip: state.paperclip - state.factoryCost,
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
    case 'SELL_UNSOLD_INVENTORY':
      if (state.unsoldInventory <= 0) return state;
      const sellUnsoldInventory = Math.max(0, Math.floor(state.unsoldInventory * (1 - state.publicDemand)));
      const sellFunds = state.funds + (state.unsoldInventory - sellUnsoldInventory) * state.paperclipPrice;
      return {
        ...state,
        unsoldInventory: sellUnsoldInventory,
        funds: sellFunds,
      };
    case 'BUY_MARKETING':
      if (state.funds < state.marketingCost) return state;
      const updateMarketing = Math.max(1, Math.min(state.marketing + 1, 10));
      return {
        ...state,
        marketing: updateMarketing,
        marketingCost: Math.max(100, Math.min(state.marketingCost * 2.5, 25600)),
        funds: Math.max(0, state.funds - state.marketingCost),
        paperclipPrice: state.paperclipPriceRef * updateMarketing,
      };
    case 'INCREASE_PAPERCLIP_COST':
      const increasePaperclipPriceRef = Math.min(state.paperclipPriceRef + 0.01, 1);
      return {
        ...state,
        paperclipPriceRef: increasePaperclipPriceRef,
        paperclipPrice: increasePaperclipPriceRef * state.marketing,
        publicDemand: 0.1 / increasePaperclipPriceRef,
      };
    case 'DECREASE_PAPERCLIP_COST':
      const decreasePaperclipPrice = Math.max(state.paperclipPriceRef - 0.01, 0.1);
      return {
        ...state,
        paperclipPriceRef: decreasePaperclipPrice,
        paperclipPrice: decreasePaperclipPrice * state.marketing,
        publicDemand: 0.1 / decreasePaperclipPrice,
      };
    case 'INCREASE_CASH':
      return state.funds >= 1 ? { ...state, cash: state.cash + 1, funds: state.funds - 1 } : state;
    case 'DECREASE_CASH':
      return state.cash >= 1 ? { ...state, cash: state.cash - 1, funds: state.funds + 1 } : state;
    case 'INCREASE_WALLET':
      if (state.cash <= action.price) return state;
      const increaseWallet = state.wallet.map((token) =>
        token.symbol === action.symbol ? { ...token, quantity: token.quantity + 0.1 } : token
      );
      return { ...state, wallet: increaseWallet, cash: state.cash - action.price };
    case 'DECREASE_WALLET':
      const decreaseWallet = state.wallet.map((token) =>
        token.symbol === action.symbol ? { ...token, quantity: Math.max(0, token.quantity - 0.1) } : token
      );
      return { ...state, wallet: decreaseWallet, cash: state.cash + action.price };
    case 'INCREASE_MEMORY':
      return {
        ...state,
        memory: Math.min(state.memory + 1, 100),
      };
    case 'INCREASE_PROCESSOR':
      return {
        ...state,
        processor: Math.min(state.processor + 1, 100),
      };
    case 'UPDATE_PER_SECOND': {
      const megaMachinePerSecond = state.megaMachine * 5e2;
      const machinePerSecond =
        state.wire >= state.megaMachine + state.machine
          ? megaMachinePerSecond + state.machine
          : state.wire >= state.megaMachine
            ? megaMachinePerSecond
            : state.wire >= state.machine
              ? state.machine
              : 0;
      const paperclipPerSecond = machinePerSecond * state.unsoldInventoryBonus;
      const fundsPerSecond = paperclipPerSecond * state.paperclipPrice;
      const operationMaxPerSecond = (state.memory * 1e6) / 100;
      const operationPerSecond =
        state.paperclip >= 2e3
          ? Math.min(operationMaxPerSecond, state.operation + 10 * state.processor)
          : state.operation;
      const creativityPerSecond = Math.min(
        20,
        operationPerSecond === operationMaxPerSecond ? state.memory : state.creativity
      );
      return {
        ...state,
        operation: operationPerSecond,
        operationMax: operationMaxPerSecond,
        creativity: creativityPerSecond,
        paperclipPerSecond: paperclipPerSecond,
        fundsPerSecond: fundsPerSecond,
        paperclip: state.paperclip + paperclipPerSecond,
        unsoldInventory: state.unsoldInventory + paperclipPerSecond,
        wire: state.wire - machinePerSecond,
      };
    }
    case 'UPDATE_PAPERCLIP':
      if (state.wire <= 0) return state;
      return {
        ...state,
        paperclip: state.paperclip + state.unsoldInventoryBonus,
        unsoldInventory: state.unsoldInventory + state.unsoldInventoryBonus,
        wire: state.wire - 1,
        paperclipPerSecond: state.paperclipPerSecond + state.unsoldInventoryBonus,
        fundsPerSecond: state.fundsPerSecond + state.unsoldInventoryBonus * state.paperclipPrice,
      };
    case 'UPDATE_TRUST':
      if (state.trust >= 100) return state;
      return {
        ...state,
        trust: Math.max(2, Math.min(action.value, 100)),
      };
    case 'UPDATE_OPERATION': // @TODO: decrease
      if (state.operation < action.value) return state;
      return {
        ...state,
        operation: Math.max(0, state.operation - action.value),
      };
    case 'UPDATE_WIRE_BONUS':
      return {
        ...state,
        wireBonus: action.value,
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
