import { Action, State } from '@/src/pages/game/components/features/Features.type.ts';

export const featuresReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'DISABLED':
      return {
        ...state,
        [action.feature]: false,
      };
    case 'ENABLED':
      return {
        ...state,
        [action.feature]: true,
      };
    default:
      return state;
  }
};
