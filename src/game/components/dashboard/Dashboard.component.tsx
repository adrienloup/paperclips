import { useEffect } from 'react';
import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { NumberComponent } from '@/src/common/components/number/Number.component';
import { ProjectsComponent } from '@/src/game/components/projects/Projects.component';
import { ManufacturingComponent } from '@/src/game/components/manufacturing/Manufacturing.component';
import { BusinessComponent } from '@/src/game/components/business/Business.component';
import { TotalComponent } from '@/src/game/components/total/Total.component';
import styles from '@/src/game/components/dashboard/Dashboard.module.scss';

function DashboardComponent() {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();

  useEffect(() => {
    const interval = setInterval(() => {
      if (dashboard.autoClippers > 0 && dashboard.autoClippers <= dashboard.wireStock) {
        setDashboard({ type: 'PRODUCE_AUTOCLIPPER' });
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, [dashboard.autoClippers, dashboard.wireStock]);

  useEffect(() => {
    //if (dashboard.transitStock !== null) {
    if (dashboard.transitStock > 0) {
      const timer = setTimeout(() => {
        setDashboard({ type: 'DECREASE_CLIP_STOCK' });
      }, 5e2);
      return () => clearTimeout(timer);
    }
  }, [dashboard.transitStock]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDashboard({ type: 'UPDATE_WIRE_COST' });
    }, 10e3);
    return () => clearInterval(interval);
  }, [dashboard.wireCost]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDashboard({ type: 'UPDATE_PER_SECOND' });
    }, 1e3);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!dashboard.feature.marketing.enabled && dashboard.clipTotal >= 200) {
      setDashboard({
        type: 'UPDATE_DISPLAY_FEATURE',
        feature: 'marketing',
        enabled: true,
        disabled: false,
        incurred: false,
      });
    }
    if (!dashboard.feature.computationalResources.enabled && dashboard.clipTotal >= 2000) {
      setDashboard({
        type: 'UPDATE_DISPLAY_FEATURE',
        feature: 'computationalResources',
        enabled: true,
        disabled: false,
        incurred: false,
      });
    }
    if (!dashboard.feature.revTracker.enabled && dashboard.clipTotal >= 2000) {
      setDashboard({
        type: 'UPDATE_DISPLAY_FEATURE',
        feature: 'revTracker',
        enabled: true,
        disabled: false,
        incurred: true,
      });
    }
    if (!dashboard.feature.improvedProduction.enabled && dashboard.clipTotal >= 2000) {
      setDashboard({
        type: 'UPDATE_DISPLAY_FEATURE',
        feature: 'improvedProduction',
        enabled: true,
        disabled: false,
        incurred: true,
      });
    }
  }, [dashboard.clipTotal]);

  return (
    <article className={styles.dashboard}>
      <TotalComponent dashboard={dashboard} />
      <ManufacturingComponent
        dashboard={dashboard}
        makeClip={() => setDashboard({ type: 'ADD_CLIP' })}
        buyAutoClippers={() => setDashboard({ type: 'ADD_AUTOCLIPPER' })}
        buyWire={() => setDashboard({ type: 'ADD_WIRE' })}
      />
      <br />
      <br /> <br /> <br />
      <BusinessComponent dashboard={dashboard} />
      <br />
      <br />
      <br />
      <p>
        Stock de Clips: {dashboard.clipStock}
        {/*{dashboard.feature.improvedProduction.enabled &&*/}
        {/*dashboard.feature.improvedProduction.disabled ? (*/}
        {/*  <>*/}
        {/*    (+*/}
        {/*    <NumberComponent number={Math.round(dashboard.productionBonus * 100)} />*/}
        {/*    %)*/}
        {/*  </>*/}
        {/*) : null}*/}
        {dashboard.productionBonus > 0.1 ? (
          <>
            (+
            <NumberComponent number={Math.round(dashboard.productionBonus * 100)} />
            %)
          </>
        ) : null}
      </p>
      <p>
        Clip cost: <NumberComponent number={dashboard.clipCost} style="currency" />
      </p>
      <button onClick={() => setDashboard({ type: 'INCREASE_CLIP_COST' })}>💰 Augmenter</button>
      <button onClick={() => setDashboard({ type: 'DECREASE_CLIP_COST' })}>💸 Diminuer</button>
      <p>publicDemand {dashboard.publicDemand}%</p>
      <br />
      <br />
      {dashboard.feature.marketing.enabled && !dashboard.feature.marketing.disabled ? (
        <>
          <button
            onClick={() => setDashboard({ type: 'UPDATE_MARKETING' })}
            disabled={dashboard.funds < dashboard.marketingCost || dashboard.marketing == 10}
          >
            marketing
          </button>
          level {dashboard.marketing}
          {dashboard.marketing < 10 ? <p>{dashboard.marketingCost} $</p> : null}
        </>
      ) : null}
      {dashboard.feature.computationalResources.enabled &&
      !dashboard.feature.computationalResources.disabled ? (
        <>
          <div>
            <br />
            Computational Resources
            <p>Trust level {dashboard.trust}</p>
            <p>+1 Trust at: 8,000 clips</p>
          </div>
          <div>
            <br />
            Projects
            <br />
            <ProjectsComponent />
          </div>
        </>
      ) : null}
      <br />
      <button onClick={() => setDashboard({ type: 'LOAD_STATE' })}>restart</button>
      <p>Bonus de production: {Math.round(dashboard.productionBonus * 100)}%</p>
      <button onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', ratio: 0.1 })}>
        10%
      </button>
      <button onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', ratio: 0.25 })}>
        25%
      </button>
      <button onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', ratio: 0.5 })}>
        50%
      </button>
      <button onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', ratio: 0.75 })}>
        75%
      </button>
      <button onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', ratio: 1 })}>
        100%
      </button>
      <p>Bonus de d'achats de fil: {Math.round(dashboard.wireBonus * 100)}%</p>
      <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_STOCK_BONUS', ratio: 0.1 })}>
        10%
      </button>
      <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_STOCK_BONUS', ratio: 0.25 })}>
        25%
      </button>
      <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_STOCK_BONUS', ratio: 0.5 })}>
        50%
      </button>
      <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_STOCK_BONUS', ratio: 0.75 })}>
        75%
      </button>
      <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_STOCK_BONUS', ratio: 1 })}>
        100%
      </button>
    </article>
  );
}

export default DashboardComponent;
