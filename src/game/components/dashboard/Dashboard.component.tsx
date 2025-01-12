import { useEffect, useReducer } from 'react';
import { useDashboard, useDashboardDispatch } from './useDashboard';
import { useProjectsDispatch } from '../projects/useProjects';
import { dashboardReducer } from './Dashboard.reducer';
import { NumberComponent } from '../../../generic/components/number/Number.component';
import { ProjectsComponent } from '../projects/Projects.component';
import styles from './Dashboard.module.scss';

function DashboardComponent() {
  const projectsDispatch = useProjectsDispatch();
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();
  const [dashboardState, dashboardDispatch] = useReducer(dashboardReducer, dashboard);

  useEffect(() => {
    setDashboard({
      clipTotal: dashboardState.clipTotal,
      clipCost: dashboardState.clipCost,
      clipStock: dashboardState.clipStock,
      transitStock: dashboardState.transitStock,
      autoClippers: dashboardState.autoClippers,
      autoClippersCost: dashboardState.autoClippersCost,
      productionBonus: dashboardState.productionBonus,
      wireStock: dashboardState.wireStock,
      wireCost: dashboardState.wireCost,
      wireBonus: dashboardState.wireBonus,
      funds: dashboardState.funds,
      publicDemand: dashboardState.publicDemand,
      marketing: dashboardState.marketing,
      marketingCost: dashboardState.marketingCost,
      clipsPerSecond: dashboardState.clipsPerSecond,
      trust: dashboardState.trust,
    });
  }, [dashboardState]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (dashboardState.autoClippers > 0) {
        dashboardDispatch({ type: 'PRODUCE_AUTOCLIPPER' });
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, [dashboardState.autoClippers]);

  useEffect(() => {
    if (dashboardState.transitStock !== null) {
      const timer = setTimeout(() => {
        dashboardDispatch({ type: 'DECREASE' });
      }, 5e2);
      return () => clearTimeout(timer);
    }
  }, [dashboardState.transitStock]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (dashboardState.wireCost > 0) {
        dashboardDispatch({ type: 'UPDATE_WIRE_COST' });
      }
    }, 10e3);
    return () => clearInterval(interval);
  }, [dashboardState.wireCost]);

  return (
    <article className={styles.dashboard}>
      <p>
        total de Clips: <NumberComponent locale="en-US" number={dashboardState.clipTotal} />
      </p>
      <button onClick={() => dashboardDispatch({ type: 'INCREASE' })}>Ajouter un Clip</button>
      <br />
      <br />
      <p>
        Clips par Seconde: <NumberComponent locale="en-US" number={dashboardState.clipsPerSecond} />
      </p>
      <p>
        Argent par Seconde:{' '}
        <NumberComponent
          locale="en-US"
          number={dashboardState.clipsPerSecond * dashboardState.clipCost + dashboardState.publicDemand * 0.001 + dashboardState.marketing * 0.01}
          style="currency"
        />
        (+
        <NumberComponent locale="en-US" number={dashboardState.publicDemand * 0.001} notation="compact" />) (+
        <NumberComponent locale="en-US" number={dashboardState.marketing * 0.01} notation="compact" />)
      </p>
      <br />
      <p>Stock de Clips: {dashboardState.clipStock}</p>
      <p>
        Fonds: <NumberComponent locale="en-US" number={dashboardState.funds} style="currency" />
      </p>
      <p>
        Clip cost: <NumberComponent locale="en-US" number={dashboardState.clipCost} style="currency" />
      </p>
      <button onClick={() => dashboardDispatch({ type: 'INCREASE_CLIP_COST' })}>💰 Augmenter</button>
      <button onClick={() => dashboardDispatch({ type: 'DECREASE_CLIP_COST' })}>💸 Diminuer</button>
      <p>publicDemand {dashboardState.publicDemand}%</p>
      <br />
      {dashboardState.clipTotal >= 100 ? (
        <div>
          <button onClick={() => dashboardDispatch({ type: 'ADD_AUTOCLIPPER' })} disabled={dashboardState.funds < dashboardState.autoClippersCost}>
            Acheter AutoClipper
          </button>
          {dashboardState.autoClippers}
          <p>
            autoClippersCost: <NumberComponent locale="en-US" number={dashboardState.autoClippersCost} style="currency" />
          </p>
        </div>
      ) : null}
      <br />
      <p>
        Fil de Fer: <NumberComponent locale="en-US" number={dashboardState.wireStock} notation="compact" />
        {dashboardState.wireStock <= dashboardState.autoClippers ? 'Empty stock!' : ''}
      </p>
      <p>
        wire cost: <NumberComponent locale="en-US" number={dashboardState.wireCost} style="currency" />
      </p>
      <button onClick={() => dashboardDispatch({ type: 'BUY_WIRE' })} disabled={dashboardState.funds < dashboardState.wireCost}>
        Buy wire
      </button>
      (+
      <NumberComponent locale="en-US" number={Math.round(dashboardState.wireBonus * 1e4)} notation="compact" /> inches)
      <br />
      <br />
      <button
        onClick={() => dashboardDispatch({ type: 'INCREASE_MARKETING' })}
        disabled={dashboardState.funds < dashboardState.marketingCost || dashboardState.marketing == 10}
      >
        marketing
      </button>
      level {dashboardState.marketing}
      <p>{dashboardState.marketingCost} $</p>
      {dashboardState.clipTotal >= 2000 ? (
        <>
          <div>
            <br />
            Computational Resources
            <p>Trust level {dashboardState.trust}</p>
            <p>+1 Trust at: 8,000 clips</p>
          </div>
          <div>
            <br />
            Projects
            <br />
            RevTracker
            <ProjectsComponent />
          </div>
        </>
      ) : null}
      <br />
      <p>Bonus de production: {Math.round(dashboardState.productionBonus * 100)}%</p>
      <button onClick={() => dashboardDispatch({ type: 'UPDATE_PRODUCTION_BONUS', productionBonusRatio: 0.1 })}>10%</button>
      <button onClick={() => dashboardDispatch({ type: 'UPDATE_PRODUCTION_BONUS', productionBonusRatio: 0.25 })}>25%</button>
      <button onClick={() => dashboardDispatch({ type: 'UPDATE_PRODUCTION_BONUS', productionBonusRatio: 0.5 })}>50%</button>
      <button onClick={() => dashboardDispatch({ type: 'UPDATE_PRODUCTION_BONUS', productionBonusRatio: 0.75 })}>75%</button>
      <button onClick={() => dashboardDispatch({ type: 'UPDATE_PRODUCTION_BONUS', productionBonusRatio: 1 })}>100%</button>
      <p>Bonus de d'achats de fil: {Math.round(dashboardState.wireBonus * 100)}%</p>
      <button onClick={() => dashboardDispatch({ type: 'UPDATE_WIRE_BONUS', wireBonusRatio: 0.1 })}>10%</button>
      <button onClick={() => dashboardDispatch({ type: 'UPDATE_WIRE_BONUS', wireBonusRatio: 0.25 })}>25%</button>
      <button onClick={() => dashboardDispatch({ type: 'UPDATE_WIRE_BONUS', wireBonusRatio: 0.5 })}>50%</button>
      <button onClick={() => dashboardDispatch({ type: 'UPDATE_WIRE_BONUS', wireBonusRatio: 0.75 })}>75%</button>
      <button onClick={() => dashboardDispatch({ type: 'UPDATE_WIRE_BONUS', wireBonusRatio: 1 })}>100%</button>
      <br />
      <button onClick={() => projectsDispatch({ type: 'ADDED', id: 'project1' })}>addProject1</button>
      <button onClick={() => projectsDispatch({ type: 'ADDED', id: 'project2' })}>addProject2</button>
    </article>
  );
}

export default DashboardComponent;
