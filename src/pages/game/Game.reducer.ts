import { Action, State } from '@/src/pages/game/Game.type.ts';

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SELL_CLIPS':
      if (state.unsoldInventory <= 0) return state;
      const unsoldInventory = Math.max(0, Math.floor(state.unsoldInventory * (1 - state.publicDemand)));
      const funds = state.funds + (state.unsoldInventory - unsoldInventory) * state.clipsCost;
      return {
        ...state,
        unsoldInventory,
        funds,
      };
    case 'BUY_WIRE':
      return {
        ...state,
        wireStock: state.wireStock + state.wire * state.wireBonus,
        wireCost: state.wireCost + (Math.random() * (1.25 - 0.25) + 0.25), // ≥ 0.25 et < 1.25
        funds: state.funds - state.wireCost,
      };
    case 'BUY_AUTOCLIPPERS':
      return {
        ...state,
        autoClippers: state.autoClippers + 1,
        autoClippersCost: state.autoClippersCost + (Math.random() * (8 - 4) + 4), // ≥ 4 et < 8
        funds: state.funds - state.autoClippersCost,
      };
    case 'BUY_MEGACLIPPERS':
      return {
        ...state,
        megaClippers: state.megaClippers + 500,
        megaClippersCost: state.megaClippersCost + 11e2,
        funds: state.funds - state.megaClippersCost,
      };
    case 'PRODUCE_MANUAL':
      if (state.wireStock <= 0) return state;
      return {
        ...state,
        clips: (state.clips + 1) * state.produceBonus,
        unsoldInventory: (state.unsoldInventory + 1) * state.produceBonus,
        wireStock: state.wireStock - 1,
        producePerSecond: (state.producePerSecond + 1) * state.produceBonus,
        fundsPerSecond: (state.fundsPerSecond + state.clipsCost) * state.produceBonus,
      };
    // case 'UPDATE_PER_SECOND':
    //   const clippersPerSecond = (state.autoClippers + state.megaClippers) * state.produceBonus;
    //   const producePerSecond = state.wireStock > 0 ? clippersPerSecond : 0;
    //   const fundsPerSecond = producePerSecond * state.clipsCost;
    //   if (state.wireStock >= clippersPerSecond) {
    //     return {
    //       ...state,
    //       clips: state.clips + producePerSecond,
    //       unsoldInventory: state.unsoldInventory + producePerSecond,
    //       wireStock: state.wireStock,
    //       producePerSecond,
    //       fundsPerSecond,
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       producePerSecond,
    //       fundsPerSecond,
    //     };
    //   }
    case 'UPDATE_PER_SECOND': {
      const clippersPerSecond = (state.autoClippers + state.megaClippers) * state.produceBonus;
      const producePerSecond = state.wireStock > 0 ? clippersPerSecond : 0;
      const fundsPerSecond = producePerSecond * state.clipsCost;
      const updatedState = {
        ...state,
        producePerSecond,
        fundsPerSecond,
      };
      if (state.wireStock >= clippersPerSecond) {
        updatedState.clips = state.clips + producePerSecond;
        updatedState.unsoldInventory = state.unsoldInventory + producePerSecond;
        updatedState.wireStock = state.wireStock - clippersPerSecond;
      }
      return updatedState;
    }

    case 'UPDATE_WIRE_COST':
      return {
        ...state,
        wireCost: state.wireCost > 10 ? state.wireCost - 0.25 : Math.random() * (20 - 12) + 12, // ≥ 12 et < 20
      };
    case 'UPDATE_WIRE_BONUS':
      return {
        ...state,
        wireBonus: action.bonus,
      };
    case 'UPDATE_PRODUCE_BONUS':
      return {
        ...state,
        produceBonus: action.bonus,
      };
    case 'INITIALIZE_STATE':
      return {
        ...action.state,
      };
    default:
      return state;
  }
};
