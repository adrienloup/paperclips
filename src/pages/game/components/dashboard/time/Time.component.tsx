import { useEffect, useRef, useState } from 'react';
import { formatDuration } from '@/src/pages/game/components/dashboard/time/Time.utils.tsx';
import { useTime } from '@/src/pages/game/components/dashboard/time/useTime.ts';

const STORAGE_KEY = 'time_played_total_ms';

export const TimeComponent = () => {
  const totalTimeTuTU = useTime();
  const [totalTime, setTotalTime] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? parseInt(saved, 10) : 0;
  });

  const sessionStart = useRef(Date.now());

  // Met à jour le temps joué en ajoutant la durée de session actuelle
  useEffect(() => {
    const interval = setInterval(() => {
      const sessionTime = Date.now() - sessionStart.current;
      setTotalTime((prev) => {
        const updated = prev + sessionTime;
        // console.log('updated.toString()', updated.toString());
        localStorage.setItem(STORAGE_KEY, updated.toString());
        sessionStart.current = Date.now(); // reset pour le prochain intervalle
        return updated;
      });
    }, 1000);

    return () => {
      // Lors du démontage, on sauvegarde une dernière fois
      const sessionTime = Date.now() - sessionStart.current;
      const finalTime = totalTime + sessionTime;
      localStorage.setItem(STORAGE_KEY, finalTime.toString());
      clearInterval(interval);
    };
  }, [totalTime]);

  // const { years, months, days, hours, minutes, seconds } = formatDuration(totalTime);
  const { years, months, days, hours, minutes, seconds } = formatDuration(totalTimeTuTU);

  return (
    <div>
      Temps total passé sur le jeu :{' '}
      <strong>
        {years} an{years !== 1 ? 's' : ''}, {months} mois, {days} jour{days !== 1 ? 's' : ''},{' '}
        {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        <br />
        <br />
        {hours > 0 ? `${hours.toString().padStart(2, '0')}:` : null}
        {minutes > 0 ? `${minutes.toString()}:` : null}
        {seconds.toString()}
      </strong>
      <div>{totalTimeTuTU}</div>
    </div>
  );
};
