import { useEffect, useRef } from 'react';
import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { DebugComponent } from '@/src/generic/common/components/debug/Debug.component';
import { InitializerComponent } from '@/src/game/components/initializer/Initializer.tsx';
import { ClipsComponent } from '@/src/game/components/clips/Clips.component';
import { CardGroupComponent } from '@/src/generic/common/components/cards/CardGroup.component';
import { CardsComponent } from '@/src/generic/common/components/cards/Cards.component';
import { ManufacturingComponent } from '@/src/game/components/manufacturing/Manufacturing.component';
import { BusinessComponent } from '@/src/game/components/business/Business.component';
import { ComputationalComponent } from '@/src/game/components/computational/Computational.component';
import styles from '@/src/game/components/dashboard/Dashboard.module.scss';

function DashboardComponent() {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();
  const dashboardRef = useRef(dashboard);

  useEffect(() => {
    dashboardRef.current = dashboard;
  }, [dashboard]);

  // SELL_CLIPS
  useEffect(() => {
    const interval = setInterval(() => {
      const { clipsTransit } = dashboardRef.current;
      if (clipsTransit > 0) {
        setDashboard({ type: 'SELL_CLIPS' });
      }
    }, 5e2);
    return () => clearInterval(interval);
  }, []);

  // UPDATE_PER_SECOND
  useEffect(() => {
    const interval = setInterval(() => {
      setDashboard({ type: 'UPDATE_PER_SECOND' });
    }, 1e3);
    return () => clearInterval(interval);
  }, []);

  // PRODUCE_AUTOMATIC_CLIPS
  useEffect(() => {
    const interval = setInterval(() => {
      const { autoClippers, megaClippers } = dashboardRef.current;
      if (autoClippers > 0 || megaClippers > 0) {
        setDashboard({ type: 'PRODUCE_AUTOMATIC_CLIPS' });
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, []);

  // UPDATE_WIRE_COST
  useEffect(() => {
    const interval = setInterval(() => {
      setDashboard({ type: 'UPDATE_WIRE_COST' });
    }, 1e4);
    return () => clearInterval(interval);
  }, []);

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
          <CardGroupComponent direction="column">
            <ComputationalComponent />
          </CardGroupComponent>
        </CardsComponent>
      </article>
    </>
  );
}

export default DashboardComponent;
