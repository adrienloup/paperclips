import { Action, State } from '@/src/pages/game/Game.type.ts';

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...action.state,
      };
    case 'SELL_UNSOLD':
      if (state.unsold <= 0) return state;
      console.log('SELL_UNSOLD');
      const sellUnsold = Math.max(0, Math.floor(state.unsold * (1 - state.publicDemand)));
      const sellFunds = state.funds + (state.unsold - sellUnsold) * state.paperclipsPrice;
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
    case 'UPDATE_PER_SECOND': {
      if (state.wire <= 0) return state;
      console.log('UPDATE_PER_SECOND');
      const updatePaperclipsPerSecond = 0; // clippersPerSecond * state.produceBonus
      return {
        ...state,
        paperclipsPerSecond: updatePaperclipsPerSecond,
        // paperclips: state.paperclips + producePerSecond,
        // unsold: state.unsold + producePerSecond,
        // wire: state.wire - paperclipsPerSecond,
      };
    }
    case 'UPDATE_PAPERCLIPS':
      if (state.wire <= 0) return state;
      return {
        ...state,
        paperclips: state.paperclips + 1, // + state.produceBonus
        unsold: state.unsold + 1, // + state.produceBonus
        wire: state.wire - 1,
        paperclipsPerSecond: state.paperclipsPerSecond + 1, // + state.produceBonus
      };
    case 'UPDATE_WIRE_COST':
      return {
        ...state,
        wireCost: state.wireCost > 10 ? state.wireCost - 0.25 : Math.random() * (20 - 12) + 12, // entre ≥ 12 et < 20
      };
    case 'UPDATE_WIRE_BONUS':
      return {
        ...state,
        wireBonus: action.bonus,
      };
    default:
      return state;
  }
};
