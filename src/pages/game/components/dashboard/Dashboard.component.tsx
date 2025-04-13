import { useCallback } from 'react';
import { useInterval } from '@/src/generic/hooks/useInterval.ts';
import { useGameDispatch } from '@/src/pages/game/useGame.ts';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { CounterComponent } from '@/src/pages/game/components/dashboard/counter/Counter.component.tsx';
import { InfoComponent } from '@/src/pages/game/components/dashboard/info/Info.component.tsx';
import { ManufacturingComponent } from '@/src/pages/game/components/dashboard/manufacturing/Manufacturing.component.tsx';
import styles from '@/src/pages/game/components/dashboard/Dashboard.module.scss';

export const DashboardComponent = () => {
  const setGame = useGameDispatch();

  const sellUnsold = useCallback(() => {
    // console.log('sellUnsold');
    setGame({ type: 'SELL_UNSOLD' });
  }, []);

  const updatePerSecond = useCallback(() => {
    // console.log('updatePerSecond');
    setGame({ type: 'UPDATE_PER_SECOND' });
  }, []);

  const updateWireCost = useCallback(() => {
    // console.log('updateWireCost');
    setGame({ type: 'UPDATE_WIRE_COST' });
  }, []);

  useInterval(sellUnsold, 5e2);
  useInterval(updatePerSecond, 1e3);
  useInterval(updateWireCost, 1e4);

  return (
    <article
      className={styles.dashboard}
      role="article"
    >
      <TitleComponent className={styles.title}>Easy way to make a paper clip</TitleComponent>
      <CounterComponent />
      <InfoComponent />
      <ManufacturingComponent />
    </article>
  );
};
