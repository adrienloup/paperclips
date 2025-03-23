import { Action, State } from '@/src/generic/common/components/alert/Alert.type.ts';

export const alertReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD':
      // return !state.find((alert) => alert.id === action.alert.id) ? [...state, action.alert] : state;
      return [{ ...action.alert, id: Math.floor(Math.random() * 100) + new Date().getTime() }, ...state];
    case 'REMOVE':
      return state.filter((alert) => alert.id !== action.id);
    default:
      return state;
  }
};
