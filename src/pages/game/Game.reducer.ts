import { Action, State } from '@/src/pages/game/Game.type.ts';

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SELL_CLIPS':
      if (state.clipsTransit > 0) {
        // console.log('clipsTransit', state.clipsTransit);
        // console.log('productionBonus', state.productionBonus);
        // console.log('clipsCost', state.clipsCost);
        const decreaseClipsTransit = Math.floor(state.clipsTransit * (1 - state.productionBonus));
        return {
          ...state,
          clipsStock: decreaseClipsTransit,
          clipsTransit: decreaseClipsTransit > 0 ? decreaseClipsTransit : 0,
          funds: state.funds + (state.clipsTransit - decreaseClipsTransit) * state.clipsCost,
        };
      }
      return { ...state };
    case 'UPDATE_PER_SECOND':
      return {
        ...state,
        clipsPerSecond: state.clipsPerSecond + 1,
      };
    default:
      return state;
  }
};
