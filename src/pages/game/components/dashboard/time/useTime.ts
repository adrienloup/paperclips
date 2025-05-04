import { useContext } from 'react';
import { TimeContext } from '@/src/pages/game/components/dashboard/time/Time.context.ts';

export const useTime = () => useContext(TimeContext);
