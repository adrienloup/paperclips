import { Action, State } from '@/src/generic/common/component/alerts/Alerts.type.ts';

export const alertsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD':
      return !state.find((alert) => alert.id === action.alert.id)
        ? [...state, action.alert]
        : state;
    case 'REMOVE':
      return state.filter((alert) => alert.id !== action.id);
    default:
      return state;
  }
};
