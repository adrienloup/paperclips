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
      // const clipsPerSecond =
      //     state.wiresStock > 0
      //         ? state.autoClippers
      //         : 0;
      return {
        ...state,
        clipsPerSecond: 0,
      };
    case 'PRODUCE_MANUAL_CLIPS':
      return {
        ...state,
        clips: state.clips + 1,
        clipsStock: state.clipsStock + 1,
        clipsTransit: state.clipsStock + 1,
        clipsPerSecond: state.clipsPerSecond + 1,
      };
    case 'INITIALIZE_STATE':
      return {
        ...action.state,
      };
    default:
      return state;
  }
};
