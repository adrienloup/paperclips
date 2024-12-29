import { Alert } from './Alert.type';

export function AlertReducer(
  alerts: Alert[],
  action: {
    id: string;
    label?: string;
    duration?: number;
    type: string;
  }
) {
  switch (action.type) {
    case 'added': {
      const exists = alerts.some((alert) => alert.id === action.id);
      if (exists) {
        return alerts;
      }
      return [
        ...alerts,
        {
          // id:
          //   Math.random().toString(36).slice(2, 9) +
          //   new Date().getTime().toString(36),
          id: action.id,
          label: action.label,
          duration: action.duration,
        },
      ];
    }
    case 'deleted': {
      return alerts.filter((alert) => alert.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
