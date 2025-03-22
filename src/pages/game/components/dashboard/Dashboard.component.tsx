import { useCallback } from 'react';
import { useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useInterval } from '@/src/generic/hooks/useInterval.ts';
import { DebugComponent } from '@/src/pages/game/components/debug/Debug.component.tsx';
import { NotificationsComponent } from '@/src/pages/game/components/notification/Notifications.component.tsx';
import { ClipsComponent } from '@/src/pages/game/components/clips/Clips.component.tsx';
import { CardsComponent } from '@/src/generic/common/components/card/Cards.component.tsx';
import { BusinessComponent } from '@/src/pages/game/components/business/Business.component.tsx';
import { ManufacturingComponent } from '@/src/pages/game/components/manufacturing/Manufacturing.component.tsx';
import { ComputationalResourcesComponent } from '@/src/pages/game/components/computational-resources/ComputationalResources.component.tsx';
import { ProjectsComponent } from '@/src/pages/game/components/projects/Projects.component.tsx';
import { StickyComponent } from '@/src/generic/common/components/sticky/Sticky.component.tsx';
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
      <StickyComponent>
        <ClipsComponent />
      </StickyComponent>
      <CardsComponent>
        <BusinessComponent />
        <ManufacturingComponent />
        <ComputationalResourcesComponent />
        <ProjectsComponent />
      </CardsComponent>
    </article>
  );
}

export default DashboardComponent;
