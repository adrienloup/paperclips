import { useEffect, useRef, useState } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { format } from '@/src/pages/profile/components/time/Time.utils.tsx';
import { TimeContext } from '@/src/pages/profile/components/time/Time.context.ts';
import { Time } from '@/src/pages/profile/components/time/Time.type.ts';
import { Children } from '@/src/generic/types/Children.type.ts';

export function TimeProvider({ children }: { children: Children }) {
  const [storedTime, setStoredTime] = useLocalStorage<number>('_time_3mma_0', 0);
  const [time, setTime] = useState<number>(storedTime);
  const sessionStart = useRef(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const sessionTime = Date.now() - sessionStart.current;
      setTime((prev) => {
        const updated = prev + sessionTime;
        setStoredTime(updated);
        sessionStart.current = Date.now();
        return updated;
      });
    }, 1e3);

    return () => {
      const sessionTime = Date.now() - sessionStart.current;
      const finalTime = time + sessionTime;
      setStoredTime(finalTime);
      clearInterval(interval);
    };
  }, [time]);

  const formatTime: Time = format(time);

  return <TimeContext.Provider value={formatTime}>{children}</TimeContext.Provider>;
}
