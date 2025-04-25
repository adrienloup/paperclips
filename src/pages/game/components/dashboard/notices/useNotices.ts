import { useContext } from 'react';
import {
  NoticesContext,
  NoticesDispatchContext,
} from '@/src/pages/game/components/dashboard/notices/Notices.context.ts';

export const useNotices = () => useContext(NoticesContext);
export const useNoticesDispatch = () => useContext(NoticesDispatchContext);
