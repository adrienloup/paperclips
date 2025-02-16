import { useCallback, useEffect, useRef } from 'react';
import { useInterval } from '@/src/generic/hooks/useInterval';
import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { DebugComponent } from '@/src/generic/common/components/debug/Debug.component';
import { InitializerComponent } from '@/src/game/components/initializer/Initializer.component';
import { ClipsComponent } from '@/src/game/components/clips/Clips.component';
import { CardsComponent } from '@/src/generic/common/components/cards/Cards.component';
import { ManufacturingComponent } from '@/src/game/components/manufacturing/Manufacturing.component';
import { BusinessComponent } from '@/src/game/components/business/Business.component';
import { ITResourcesComponent } from '@/src/game/components/it-resources/ITResources.component';
import { ProjectsComponent } from '@/src/game/components/projects/Projects.component';
import styles from '@/src/game/components/dashboard/Dashboard.module.scss';

function DashboardComponent() {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();
  const dashboardRef = useRef(dashboard);

  useEffect(() => {
    dashboardRef.current = dashboard;
  }, [dashboard]);

  const sellClips = useCallback(() => {
    const { clipsTransit } = dashboardRef.current;
    if (clipsTransit > 0) {
      setDashboard({ type: 'SELL_CLIPS' });
    }
  }, []);

  const updateProduceClips = useCallback(() => {
    const { autoClippers, megaClippers } = dashboardRef.current;
    if (autoClippers > 0 || megaClippers > 0) {
      setDashboard({ type: 'PRODUCE_AUTOMATIC_CLIPS' });
    }
    setDashboard({ type: 'UPDATE_PER_SECOND' });
  }, []);

  const updateWireCost = useCallback(() => {
    setDashboard({ type: 'UPDATE_WIRE_COST' });
  }, []);

  useInterval(sellClips, 5e2);
  useInterval(updateProduceClips, 1e3);
  useInterval(updateWireCost, 1e4);

  return (
    <>
      <DebugComponent>
        <InitializerComponent />
      </DebugComponent>
      <article className={styles.dashboard}>
        <ClipsComponent />
        <CardsComponent>
          <ManufacturingComponent />
          <BusinessComponent />
          <ITResourcesComponent />
          <ProjectsComponent />
        </CardsComponent>
      </article>
    </>
  );
}

export default DashboardComponent;
