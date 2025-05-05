import { useTime } from '@/src/pages/profile/components/time/useTime.ts';

export const TimeComponent = () => {
  const time = useTime();

  return (
    <div>
      Temps total passé sur le jeu : {time.years} an{time.years !== 1 ? 's' : ''}, {time.months} mois, {time.days} jour{' '}
      {time.hours.toString().padStart(2, '0')}:{time.minutes.toString().padStart(2, '0')}:
      {time.seconds.toString().padStart(2, '0')}
    </div>
  );
};
