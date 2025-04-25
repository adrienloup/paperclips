import { Action, State } from '@/src/pages/game/components/dashboard/notices/Notices.type.ts';

export const noticesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ENABLED':
      return state.map((notice) =>
        notice.id === action.id && !notice.enabled
          ? { ...notice, enabled: true, viewed: false }
          : notice
      );
    case 'DISABLED':
      return state.map((notice) =>
        notice.id === action.id ? { ...notice, enabled: false } : notice
      );
    case 'VIEWED':
      return state.map((notice) =>
        notice.id === action.id ? { ...notice, viewed: true } : notice
      );
    default:
      return state;
  }
};
