import { useEffect, useRef, useState } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { TimeContext } from '@/src/pages/profile/components/time/Time.context.ts';
// import { timeState } from '@/src/pages/game/components/dashboard/time/Time.state.ts';
// import { Time } from '@/src/pages/game/components/dashboard/time/Time.type.ts';
import { Children } from '@/src/generic/types/Children.type.ts';
// import { formatDuration } from '@/src/pages/game/components/dashboard/time/Time.utils.tsx';

// const SECOND = 1000;
// const MINUTE = SECOND * 60;
// const HOUR = MINUTE * 60;
// const DAY = HOUR * 24;
// const MONTH = DAY * 30.44;
// const YEAR = DAY * 365.25;

export function TimeProvider({ children }: { children: Children }) {
  // const [time, setTime] = useLocalStorage<Time>('_time_3mma_0', timeState);
  const [time, setTime] = useLocalStorage<number>('_time_3mma_0', 0);
  const [totalTimeTuTU, setTotalTime] = useState<number>(time);

  const sessionStart = useRef(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const sessionTime = Date.now() - sessionStart.current;
      setTotalTime((prev) => {
        const updated = prev + sessionTime;
        // localStorage.setItem(STORAGE_KEY, updated.toString());
        setTime(updated);
        sessionStart.current = Date.now();
        return updated;
      });
    }, 1e3);

    return () => {
      const sessionTime = Date.now() - sessionStart.current;
      const finalTime = totalTimeTuTU + sessionTime;
      // localStorage.setItem(STORAGE_KEY, finalTime.toString());
      setTime(finalTime);
      clearInterval(interval);
    };
  }, [totalTimeTuTU]);

  return <TimeContext.Provider value={totalTimeTuTU}>{children}</TimeContext.Provider>;
}
