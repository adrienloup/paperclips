import { Action, State } from '@/src/pages/game/Game.type.ts';

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SELL_CLIPS':
      return {
        ...state,
      };
    case 'UPDATE_PER_SECOND':
      return {
        ...state,
        clipsPerSecond: state.clipsPerSecond + 1,
      };
    default:
      return state;
  }
};
