import { Action, State } from '@/src/pages/game/Game.type.ts';

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SELL_CLIPS':
      if (state.unsoldInventory <= 0) return state;
      const unsoldInventory = Math.max(
        0,
        Math.floor(state.unsoldInventory * (1 - state.publicDemand))
      );
      return {
        ...state,
        unsoldInventory,
        funds: state.funds + (state.unsoldInventory - unsoldInventory) * state.clipsCost,
      };
    case 'UPDATE_PER_SECOND':
      const producePerSecond =
        state.wiresStock > 0
          ? state.autoClippers +
            state.megaClippers +
            state.produceBonus * (state.autoClippers + state.megaClippers) // V + (P / 100 * V)
          : 0;
      return {
        ...state,
        producePerSecond,
        fundsPerSecond: producePerSecond * state.clipsCost,
      };
    case 'PRODUCE_MANUAL_CLIPS':
      const increaseClips = Math.floor(1 + state.produceBonus); // V + (P / 100 * V)
      return {
        ...state,
        clips: state.clips + increaseClips,
        unsoldInventory: state.unsoldInventory + increaseClips,
        producePerSecond: state.producePerSecond + increaseClips,
        fundsPerSecond: state.fundsPerSecond + increaseClips * state.clipsCost,
        wiresStock: state.wiresStock - 1,
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
