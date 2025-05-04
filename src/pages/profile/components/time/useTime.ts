import { useContext } from 'react';
import { TimeContext } from '@/src/pages/profile/components/time/Time.context.ts';

export const useTime = () => useContext(TimeContext);
