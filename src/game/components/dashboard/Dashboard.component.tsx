import { useEffect, useRef, useState } from 'react';
import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { NumberComponent } from '@/src/common/components/number/Number.component';
import styles from '@/src/game/components/dashboard/Dashboard.module.scss';

function DashboardComponent() {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();
  const [selling, setSelling] = useState(false);
  const dashboardRef = useRef(dashboard);

  useEffect(() => {
    dashboardRef.current = dashboard;
  }, [dashboard]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        dashboardRef.current.clipsStock > 0 &&
        dashboardRef.current.clipsStock >= dashboardRef.current.clipsSales
      ) {
        setSelling(true);
        setDashboard({ type: 'SELL_CLIPS' });
        setSelling(false);
      }
    }, 5e2);
    return () => clearInterval(interval);
  }, []);

  const produceClips = () => {
    if (selling) return;
    setDashboard({ type: 'PRODUCE_MANUAL_CLIPS' });
  };

  return (
    <article className={styles.dashboard}>
      <h2>dashboard</h2>
      <br />
      Papersclips {dashboard.clips}
      <br />
      <button onClick={produceClips} disabled={dashboard.wireStock < 1}>
        Fabriquer
      </button>
      <br />
      <br />
      clipsBonus {dashboard.clipsBonus}
      <br />
      publicDemandBonus {dashboard.publicDemandBonus}
      <br />
      bonus produce{' '}
      <NumberComponent
        number={(dashboard.clipsBonus + dashboard.publicDemandBonus + dashboard.marketing) * 0.01}
        style="percent"
      />
      <br />
      ventes {dashboard.clipsSales}
      <br />
      <br />
      funds <NumberComponent number={dashboard.funds} style="currency" />
      <br />
      <br />
      Unsold inventory {dashboard.clipsStock}
      <br />
      <br />
      Wire {dashboard.wireStock}
      <br />
      <br />
      <button onClick={() => setDashboard({ type: 'DECREASE_CLIPS_COST' })}>decrease</button>
      <button onClick={() => setDashboard({ type: 'INCREASE_CLIPS_COST' })}>increase</button>
      <br />
      clips cost {dashboard.clipsCost}
      <br />
      <br />
      Public demand {dashboard.publicDemand}
      <br />
      <NumberComponent number={dashboard.publicDemand} style="percent" />
      <br />
      <br />
      Marketing level {dashboard.marketing}
      <br />
      <button
        onClick={() => setDashboard({ type: 'UPDATE_MARKETING' })}
        disabled={dashboard.marketing == 10}
      >
        Marketing
      </button>
      <br />
      <br />
      <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 30 })}>30%</button>
      <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 40 })}>40%</button>
      <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 80 })}>80%</button>
      {/*<button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 0.15 })}>15%</button>*/}
      {/*<button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 0.25 })}>25%</button>*/}
      {/*<button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 0.5 })}>50%</button>*/}
      {/*<button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 0.75 })}>75%</button>*/}
      {/*<button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 1 })}>100%</button>*/}
    </article>
  );
}

export default DashboardComponent;
