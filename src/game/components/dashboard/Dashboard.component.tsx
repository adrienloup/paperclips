import { useEffect, useRef } from 'react';
import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { DebugComponent } from '@/src/generic/common/components/debug/Debug.component';
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
        <div>
          <div>Données de test</div>
          <div>
            <button onClick={() => setDashboard({ type: 'REBOOT' })}>Reboot</button>
          </div>
        </div>
        <div>
          <div>
            Bonus de production
            <br />+ marketing level {dashboard.marketing}
            <br />= {dashboard.productionBonus}
          </div>
          <div>
            <button
              onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', bonus: 0.15 })}
              disabled={dashboard.marketing < 10}
            >
              +15%
            </button>
            <button
              onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', bonus: 0.25 })}
              disabled={dashboard.marketing < 10}
            >
              +25%
            </button>
            <button
              onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', bonus: 0.35 })}
              disabled={dashboard.marketing < 10}
            >
              +35%
            </button>
            <button
              onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', bonus: 0.45 })}
              disabled={dashboard.marketing < 10}
            >
              +45%
            </button>
            <button
              onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', bonus: 0.55 })}
              disabled={dashboard.marketing < 10}
            >
              +55%
            </button>
          </div>
        </div>
        <div>
          <div>Bonus d'achat de fer {dashboard.wiresBonus}</div>
          <div>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0 })}>
              0%
            </button>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.1 })}>
              10%
            </button>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.25 })}>
              25%
            </button>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.5 })}>
              50%
            </button>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.75 })}>
              75%
            </button>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 1 })}>
              100%
            </button>
          </div>
        </div>
        <div>
          <div>Quantité d'achat de fer {dashboard.wires}</div>
          <div>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE', wire: 1e3 })}>1000</button>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE', wire: 2e3 })}>2000</button>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE', wire: 4e3 })}>4000</button>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE', wire: 5e3 })}>5000</button>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE', wire: 1e4 })}>10000</button>
          </div>
        </div>
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
