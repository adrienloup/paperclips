import { useEffect, useRef, useState } from 'react';
import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { ClipsComponent } from '@/src/game/components/clips/Clips.component';
// import { CardsComponent } from '@/src/common/components/cards/Cards.component';
import { CardComponent } from '@/src/common/components/cards/Card.component';
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
      const { wireStock, clipsStock, clipsSales } = dashboardRef.current;
      if (/*clipsStock > 0 &&*/ wireStock > 0 && clipsStock >= clipsSales) {
        setSelling(true);
        setDashboard({ type: 'SELL_CLIPS' });
        setSelling(false);
      }
    }, 5e2);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      //const { wireStock } = dashboardRef.current;
      // if (wireStock > 0) {
      setDashboard({ type: 'UPDATE_PER_SECOND' });
      // }
    }, 1e3);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const { wireStock, autoClippers } = dashboardRef.current;
      if (!selling && wireStock >= autoClippers) {
        setDashboard({ type: 'PRODUCE_AUTOMATIC_CLIPS' });
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDashboard({ type: 'UPDATE_WIRE_COST' });
    }, 10e3);
    return () => clearInterval(interval);
  }, []);

  const produceClips = () => {
    if (dashboard.wireStock > 0 && !selling) {
      setDashboard({ type: 'PRODUCE_MANUAL_CLIPS' });
    }
  };

  return (
    <article className={styles.dashboard}>
      <ClipsComponent clips={dashboard.clips} />
      {/*<CardsComponent>*/}
      <CardComponent className={styles.manufacturing}>
        <h2>Manufacturing</h2>
        clipsPerSecond {dashboard.clipsPerSecond}
        <br />
        bonus +{dashboard.autoClippersBonus}
        <br />
        <button onClick={produceClips} disabled={dashboard.wireStock < 1}>
          Fabriquer
        </button>
        <br />
        Wire {dashboard.wireStock}
        <br />
        <button
          onClick={() => setDashboard({ type: 'UPDATE_WIRE_STOCK' })}
          disabled={dashboard.funds < dashboard.wireCost}
        >
          Acheter
        </button>
        <br />
        Cost <NumberComponent number={dashboard.wireCost} style="currency" />
        <br />
        bonus +{dashboard.wireBonus}
        <br />
        <br />
        AutoClippers {dashboard.autoClippers}
        <br />
        Cost <NumberComponent number={dashboard.autoClippersCost} style="currency" />
        <br />
        <button
          onClick={() => setDashboard({ type: 'UPDATE_AUTOCLIPPERS' })}
          disabled={dashboard.autoClippersCost > dashboard.funds}
        >
          Acheter
        </button>
        <br />
        <br />
        MegaClippers {dashboard.megaClippers}
        <br />
        Cost <NumberComponent number={dashboard.megaClippersCost} style="currency" />
        <br />
        <button
          onClick={() => setDashboard({ type: 'UPDATE_MEGACLIPPERS' })}
          disabled={dashboard.megaClippersCost > dashboard.funds}
        >
          Acheter
        </button>
        <br />
        <br />
        <br />
        clipsBonus
        <br />
        <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 30 })}>30%</button>
        <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 40 })}>40%</button>
        <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 50 })}>50%</button>
        <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 60 })}>60%</button>
        <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 70 })}>70%</button>
        <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 80 })}>80%</button>
        <br />
        <br />
        autoClippersBonus
        <br />
        <button onClick={() => setDashboard({ type: 'UPDATE_AUTOCLIPPERS_BONUS', bonus: 1 })}>
          +1
        </button>
        <button onClick={() => setDashboard({ type: 'UPDATE_AUTOCLIPPERS_BONUS', bonus: 2 })}>
          +2
        </button>
        <button onClick={() => setDashboard({ type: 'UPDATE_AUTOCLIPPERS_BONUS', bonus: 3 })}>
          +3
        </button>
        <button onClick={() => setDashboard({ type: 'UPDATE_AUTOCLIPPERS_BONUS', bonus: 4 })}>
          +4
        </button>
        <button onClick={() => setDashboard({ type: 'UPDATE_AUTOCLIPPERS_BONUS', bonus: 5 })}>
          +5
        </button>
        <button onClick={() => setDashboard({ type: 'UPDATE_AUTOCLIPPERS_BONUS', bonus: 6 })}>
          +6
        </button>
        <button onClick={() => setDashboard({ type: 'UPDATE_AUTOCLIPPERS_BONUS', bonus: 7 })}>
          +7
        </button>
        <br />
        <br />
        wireBonus
        <br />
        <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 2e3 })}>
          2000
        </button>
        <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 25e2 })}>
          2500
        </button>
        <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 5e3 })}>
          5000
        </button>
        <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 1e4 })}>
          10000
        </button>
        <br />
        <br />
        <button onClick={() => setDashboard({ type: 'LOAD_STATE' })}>restart</button>
      </CardComponent>
      <CardComponent className={styles.business}>
        <h2>Business</h2>
        funds <NumberComponent number={dashboard.funds} style="currency" />
        <br />
        <br />
        clipsBonus {dashboard.clipsBonus}
        <br />
        publicDemandBonus {dashboard.publicDemandBonus}
        (ventes {dashboard.clipsSales})
        <br />
        Unsold inventory {dashboard.clipsStock}
        <br />
        bonus{' '}
        <NumberComponent
          number={(dashboard.clipsBonus + dashboard.publicDemandBonus + dashboard.marketing) * 0.01}
          style="percent"
        />
        <br />
        <br />
        clips cost {dashboard.clipsCost}
        <br />
        <br />
        Public demand {dashboard.publicDemand}
        <br />
        <NumberComponent number={dashboard.publicDemand} style="percent" />
        <br />
        <button
          onClick={() => setDashboard({ type: 'DECREASE_CLIPS_COST' })}
          disabled={dashboard.publicDemand == 1}
        >
          decrease
        </button>
        <button
          onClick={() => setDashboard({ type: 'INCREASE_CLIPS_COST' })}
          disabled={dashboard.publicDemand == 0.01}
        >
          increase
        </button>
        <br />
        Marketing level {dashboard.marketing}
        <br />
        <button
          onClick={() => setDashboard({ type: 'UPDATE_MARKETING' })}
          disabled={dashboard.marketing == 10}
        >
          Marketing
        </button>
      </CardComponent>
      <CardComponent className={styles.computationalResources}>
        <h2>Computational Resources</h2>
      </CardComponent>
      <CardComponent className={styles.projects}>
        <h2>Projects</h2>
      </CardComponent>
      {/*</CardsComponent>*/}
    </article>
  );
}

export default DashboardComponent;
