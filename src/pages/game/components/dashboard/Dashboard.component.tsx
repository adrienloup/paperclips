import { useCallback } from 'react';
import { useInterval } from '@/src/generic/hooks/useInterval.ts';
import { useGameDispatch } from '@/src/pages/game/useGame.ts';
import { PaperclipsComponent } from '@/src/pages/game/components/dashboard/paperclips/Paperclips.component.tsx';
import { ManufacturingComponent } from '@/src/pages/game/components/dashboard/manufacturing/Manufacturing.component.tsx';
import { BusinessComponent } from '@/src/pages/game/components/dashboard/business/Business.component.tsx';
import { ResourcesComponent } from '@/src/pages/game/components/dashboard/resources/ResourcesComponent.tsx';
import { ProjectsComponent } from '@/src/pages/game/components/dashboard/projects/ResourcesComponent.tsx';
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
      <PaperclipsComponent />
      <ManufacturingComponent />
      <BusinessComponent />
      <ResourcesComponent />
      <ProjectsComponent />
    </article>
  );
};
