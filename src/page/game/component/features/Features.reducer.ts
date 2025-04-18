import { Action, State } from '@/src/page/game/component/features/Features.type.ts';

export const featuresReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'DISABLE':
      return {
        ...state,
        [action.feature]: false,
      };
    case 'ENABLE':
      return {
        ...state,
        [action.feature]: true,
      };
    default:
      return state;
  }
};
