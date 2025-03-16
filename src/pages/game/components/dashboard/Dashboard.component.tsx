import { useCallback } from 'react';
import { useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useInterval } from '@/src/generic/hooks/useInterval.ts';
import { DebugComponent } from '@/src/pages/game/components/debug/Debug.component.tsx';
import { NotificationsComponent } from '@/src/pages/game/components/notification/Notifications.component.tsx';
import { ClipsComponent } from '@/src/pages/game/components/clips/Clips.component.tsx';
import { GridComponent } from '@/src/generic/common/components/grid/Grid.component.tsx';
import { ManufacturingComponent } from '@/src/pages/game/components/manufacturing/Manufacturing.component.tsx';
import { BusinessComponent } from '@/src/pages/game/components/business/Business.component.tsx';
import { ResourcesComponent } from '@/src/pages/game/components/resources/Resources.component.tsx';
import styles from '@/src/pages/game/components/dashboard/Dashboard.module.scss';

function DashboardComponent() {
  //console.log('DashboardComponent');
  const setGame = useGameDispatch();

  const sellClips = useCallback(() => {
    setGame({ type: 'SELL_CLIPS' });
  }, []);

  const updatePerSecond = useCallback(() => {
    setGame({ type: 'UPDATE_PER_SECOND' });
  }, []);

  const updateWireCost = useCallback(() => {
    setGame({ type: 'UPDATE_WIRE_COST' });
  }, []);

  useInterval(sellClips, 5e2);
  useInterval(updatePerSecond, 1e3);
  useInterval(updateWireCost, 1e4);

  return (
    <article className={styles.dashboard}>
      <DebugComponent />
      <NotificationsComponent />
      <ClipsComponent />
      <GridComponent>
        <ManufacturingComponent />
        <BusinessComponent />
        <ResourcesComponent />
      </GridComponent>
    </article>
  );
}

export default DashboardComponent;
