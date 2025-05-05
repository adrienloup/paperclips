import { createContext } from 'react';
import { timeState } from '@/src/pages/profile/components/time/Time.state.ts';

export const TimeContext = createContext<{
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}>(timeState);
