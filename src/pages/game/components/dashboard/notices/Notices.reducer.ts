import { Action, State } from '@/src/pages/game/components/dashboard/notices/Notices.type.ts';

export const noticesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ENABLE':
      return state.map((notice) =>
        notice.id === action.id && !notice.enable
          ? { ...notice, enable: true, view: false }
          : notice
      );
    case 'DISABLE':
      return state.map((notice) =>
        notice.id === action.id ? { ...notice, enable: false } : notice
      );
    case 'VIEW':
      return state.map((notice) => (notice.id === action.id ? { ...notice, view: true } : notice));
    default:
      return state;
  }
};
