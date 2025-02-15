import { useEffect, useRef } from 'react';
import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { DebugComponent } from '@/src/generic/common/components/debug/Debug.component';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component';
import styles from '@/src/game/components/dashboard/Dashboard.module.scss';

function DashboardComponent() {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();
  const dashboardRef = useRef(dashboard);

  useEffect(() => {
    dashboardRef.current = dashboard;
  }, [dashboard]);

  useEffect(() => {
    const interval = setInterval(() => {
      const { clipsTransit } = dashboardRef.current;
      if (clipsTransit > 0) {
        setDashboard({ type: 'SELL_CLIPS' });
      }
    }, 5e2);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const { wireStock, autoClippers, megaClippers } = dashboardRef.current;
      if (wireStock >= autoClippers + megaClippers) {
        setDashboard({ type: 'PRODUCE_AUTOMATIC_CLIPS' });
      }
    }, 1e3);
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
          <div>Bonus de production {dashboard.productionBonus}</div>
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
          <div>Bonus d'achat de fer {dashboard.wireBonus}</div>
          <div>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_STOCK_BONUS', bonus: 0.1 })}>
              10%
            </button>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_STOCK_BONUS', bonus: 0.25 })}>
              25%
            </button>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_STOCK_BONUS', bonus: 0.5 })}>
              50%
            </button>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_STOCK_BONUS', bonus: 0.75 })}>
              75%
            </button>
            <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_STOCK_BONUS', bonus: 1 })}>
              100%
            </button>
          </div>
        </div>
      </DebugComponent>
      <article className={styles.dashboard}>
        <div>
          <div>clips : {dashboard.clips}</div>
          <div>
            <div>wireCost : {dashboard.wireCost}</div>
            <div>
              wireStock : <NumberComponent number={dashboard.wireStock} notation="compact" />
              <br />
              <NumberComponent
                number={Math.round(dashboard.wireBonus * 1e4)}
                notation="compact"
              />{' '}
              inches +<NumberComponent number={dashboard.wireBonus} style="percent" />
            </div>
            <button
              onClick={() => setDashboard({ type: 'BUY_WIRE' })}
              disabled={dashboard.funds < dashboard.wireCost}
            >
              Acheter
            </button>
          </div>
          <div>clipsStock : {dashboard.clipsStock}</div>
          <div>
            +<NumberComponent number={dashboard.productionBonus} style="percent" />
          </div>
          {/*<div>clipsTransit : {dashboard.clipsTransit}</div>*/}
          <button
            onClick={() => setDashboard({ type: 'PRODUCE_MANUAL_CLIPS' })}
            disabled={dashboard.wireStock < 1}
          >
            Fabriquer
          </button>
          <br />
          <div>AutoClippers {dashboard.autoClippers}</div>
          <button
            onClick={() => setDashboard({ type: 'UPDATE_AUTOCLIPPERS' })}
            disabled={dashboard.autoClippersCost > dashboard.funds}
          >
            Acheter
          </button>
          <br />
          <div>MegaClippers {dashboard.megaClippers}</div>
          <button
            onClick={() => setDashboard({ type: 'UPDATE_MEGACLIPPERS' })}
            disabled={dashboard.megaClippersCost > dashboard.funds}
          >
            Acheter
          </button>
        </div>
        <div>
          funds : {dashboard.funds}
          <br />
          clips cost {dashboard.clipsCost}
          <br />
          Public demand {dashboard.publicDemand}
          <br />
          <NumberComponent number={dashboard.publicDemand} style="percent" />
          <div>
            <button
              onClick={() => setDashboard({ type: 'DECREASE_CLIPS_COST' })}
              disabled={dashboard.publicDemand === 1}
            >
              decrease
            </button>
            <button
              onClick={() => setDashboard({ type: 'INCREASE_CLIPS_COST' })}
              disabled={dashboard.publicDemand === 0.01}
            >
              increase
            </button>
            <div>
              Marketing level {dashboard.marketing}
              <br />
              <button
                onClick={() => setDashboard({ type: 'UPDATE_MARKETING' })}
                disabled={dashboard.marketing === 10}
              >
                Marketing
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default DashboardComponent;
