import { Action, State } from '@/src/pages/game/components/dashboard/notices/Notices.type.ts';

export const noticesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ENABLE_NOTICE':
      return state.map((notice) =>
        notice.id === action.id && !notice.enabled ? { ...notice, enabled: true, viewed: false } : notice
      );
    case 'DISABLE_NOTICE':
      return state.map((notice) => (notice.id === action.id ? { ...notice, enabled: false } : notice));
    case 'VIEW_NOTICE':
      return state.map((notice) => (notice.id === action.id ? { ...notice, viewed: true } : notice));
    default:
      return state;
  }
};
