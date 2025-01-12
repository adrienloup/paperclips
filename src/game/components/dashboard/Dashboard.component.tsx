import { useEffect } from 'react';
import { useDashboard, useDashboardDispatch } from './useDashboard';
import { NumberComponent } from '../../../generic/components/number/Number.component';
import { ProjectsComponent } from '../projects/Projects.component';
import styles from './Dashboard.module.scss';

function DashboardComponent() {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();

  useEffect(() => {
    const interval = setInterval(() => {
      if (dashboard.autoClippers > 0) {
        setDashboard({ type: 'PRODUCE_AUTOCLIPPER' });
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, [dashboard.autoClippers]);

  useEffect(() => {
    if (dashboard.transitStock !== null) {
      const timer = setTimeout(() => {
        setDashboard({ type: 'DECREASE' });
      }, 5e2);
      return () => clearTimeout(timer);
    }
  }, [dashboard.transitStock]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (dashboard.wireCost > 0) {
        setDashboard({ type: 'UPDATE_WIRE_COST' });
      }
    }, 10e3);
    return () => clearInterval(interval);
  }, [dashboard.wireCost]);

  useEffect(() => {
    if (!dashboard.feature.autoClippers.enabled && dashboard.clipTotal >= 100) {
      setDashboard({
        type: 'UPDATE_DISPLAY_FEATURE',
        feature: 'autoClippers',
        enabled: true,
        disabled: false,
        incurred: false,
      });
    }
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
      <p>
        total de Clips: <NumberComponent locale="en-US" number={dashboard.clipTotal} />
      </p>
      <button onClick={() => setDashboard({ type: 'INCREASE' })}>Ajouter un Clip</button>
      <br />
      <br />
      <p>
        Clips par Seconde: <NumberComponent locale="en-US" number={dashboard.clipsPerSecond} />
      </p>
      {dashboard.feature.autoAverage.enabled && !dashboard.feature.autoAverage.disabled ? (
        <p>
          Argent par Seconde:{' '}
          <NumberComponent
            locale="en-US"
            number={dashboard.clipsPerSecond * (dashboard.clipCost + dashboard.publicDemand * 0.001 + dashboard.marketing * 0.01)}
            style="currency"
          />
          (+
          <NumberComponent locale="en-US" number={dashboard.publicDemand * 0.001} notation="compact" />)
          {dashboard.feature.marketing.enabled && !dashboard.feature.marketing.disabled ? (
            <>
              (+
              <NumberComponent locale="en-US" number={dashboard.marketing * 0.01} notation="compact" />)
            </>
          ) : null}
        </p>
      ) : null}
      <br />
      <p>
        Stock de Clips: {dashboard.clipStock}
        {dashboard.feature.improvedProduction.enabled && dashboard.feature.improvedProduction.disabled ? (
          <>
            (+
            <NumberComponent locale={'en-US'} number={Math.round(dashboard.productionBonus * 100)} />
            %)
          </>
        ) : null}
      </p>
      <p>
        Fonds: <NumberComponent locale="en-US" number={dashboard.funds} style="currency" />
      </p>
      <p>
        Clip cost: <NumberComponent locale="en-US" number={dashboard.clipCost} style="currency" />
      </p>
      <button onClick={() => setDashboard({ type: 'INCREASE_CLIP_COST' })}>💰 Augmenter</button>
      <button onClick={() => setDashboard({ type: 'DECREASE_CLIP_COST' })}>💸 Diminuer</button>
      <p>publicDemand {dashboard.publicDemand}%</p>
      <br />
      {dashboard.feature.autoClippers.enabled && !dashboard.feature.autoClippers.disabled ? (
        <div>
          <button onClick={() => setDashboard({ type: 'ADD_AUTOCLIPPER' })} disabled={dashboard.funds < dashboard.autoClippersCost}>
            Acheter AutoClipper
          </button>
          {dashboard.autoClippers}
          <p>
            autoClippersCost: <NumberComponent locale="en-US" number={dashboard.autoClippersCost} style="currency" />
          </p>
        </div>
      ) : null}
      <br />
      <p>
        Fil de Fer: <NumberComponent locale="en-US" number={dashboard.wireStock} notation="compact" />
        {dashboard.wireStock <= dashboard.autoClippers ? 'Empty stock!' : ''}
      </p>
      <p>
        wire cost: <NumberComponent locale="en-US" number={dashboard.wireCost} style="currency" />
      </p>
      <button onClick={() => setDashboard({ type: 'BUY_WIRE' })} disabled={dashboard.funds < dashboard.wireCost}>
        Buy wire
      </button>
      (+
      <NumberComponent locale="en-US" number={Math.round(dashboard.wireBonus * 1e4)} notation="compact" /> inches)
      <br />
      <br />
      {dashboard.feature.marketing.enabled && !dashboard.feature.marketing.disabled ? (
        <>
          <button
            onClick={() => setDashboard({ type: 'INCREASE_MARKETING' })}
            disabled={dashboard.funds < dashboard.marketingCost || dashboard.marketing == 10}
          >
            marketing
          </button>
          level {dashboard.marketing}
          <p>{dashboard.marketingCost} $</p>
        </>
      ) : null}
      {dashboard.feature.computationalResources.enabled && !dashboard.feature.computationalResources.disabled ? (
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
      <p>Bonus de production: {Math.round(dashboard.productionBonus * 100)}%</p>
      <button onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_RATIO', productionRatio: 0.1 })}>10%</button>
      <button onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_RATIO', productionRatio: 0.25 })}>25%</button>
      <button onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_RATIO', productionRatio: 0.5 })}>50%</button>
      <button onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_RATIO', productionRatio: 0.75 })}>75%</button>
      <button onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_RATIO', productionRatio: 1 })}>100%</button>
      <p>Bonus de d'achats de fil: {Math.round(dashboard.wireBonus * 100)}%</p>
      <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_RATIO', wireRatio: 0.1 })}>10%</button>
      <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_RATIO', wireRatio: 0.25 })}>25%</button>
      <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_RATIO', wireRatio: 0.5 })}>50%</button>
      <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_RATIO', wireRatio: 0.75 })}>75%</button>
      <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_RATIO', wireRatio: 1 })}>100%</button>
    </article>
  );
}

export default DashboardComponent;
