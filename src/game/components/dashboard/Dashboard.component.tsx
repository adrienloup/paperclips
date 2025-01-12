import { useEffect, useReducer } from 'react';
import { useDashboard, useDashboardDispatch } from './useDashboard';
import { dashboardReducer } from './Dashboard.reducer';
import { NumberComponent } from '../../../generic/components/number/Number.component';
import styles from './Dashboard.module.scss';

function DashboardComponent() {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();
  const [state, dispatch] = useReducer(dashboardReducer, dashboard);

  useEffect(() => {
    setDashboard({
      clipTotal: state.clipTotal,
      clipCost: state.clipCost,
      clipStock: state.clipStock,
      transitStock: state.transitStock,
      autoClippers: state.autoClippers,
      autoClippersCost: state.autoClippersCost,
      productionBonus: state.productionBonus,
      wireStock: state.wireStock,
      wireCost: state.wireCost,
      wireBonus: state.wireBonus,
      funds: state.funds,
      publicDemand: state.publicDemand,
      marketing: state.marketing,
      marketingCost: state.marketingCost,
      clipsPerSecond: state.clipsPerSecond,
    });
  }, [state]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state.autoClippers > 0) {
        dispatch({ type: 'PRODUCE_AUTOCLIPPER' });
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, [state.autoClippers]);

  useEffect(() => {
    if (state.transitStock !== null) {
      const timer = setTimeout(() => {
        dispatch({ type: 'DECREASE' });
      }, 5e2);
      return () => clearTimeout(timer);
    }
  }, [state.transitStock]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state.wireCost > 0) {
        dispatch({ type: 'UPDATE_WIRE_COST' });
      }
    }, 10e3);
    return () => clearInterval(interval);
  }, [state.wireCost]);

  return (
    <article className={styles.dashboard}>
      <p>
        total de Clips: <NumberComponent locale="en-US" number={state.clipTotal} />
      </p>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>Ajouter un Clip</button>
      <br />
      <br />
      <p>
        Clips par Seconde: <NumberComponent locale="en-US" number={state.clipsPerSecond} />
      </p>
      <p>
        Argent par Seconde:{' '}
        <NumberComponent
          locale="en-US"
          number={state.clipsPerSecond * state.clipCost + state.publicDemand * 0.001 + state.marketing * 0.01}
          style="currency"
        />
        (+
        <NumberComponent locale="en-US" number={state.publicDemand * 0.001} notation="compact" />) (+
        <NumberComponent locale="en-US" number={state.marketing * 0.01} notation="compact" />)
      </p>
      <br />
      <p>Stock de Clips: {state.clipStock}</p>
      <p>
        Fonds: <NumberComponent locale="en-US" number={state.funds} style="currency" />
      </p>
      <p>
        Clip cost: <NumberComponent locale="en-US" number={state.clipCost} style="currency" />
      </p>
      <button onClick={() => dispatch({ type: 'INCREASE_CLIP_COST' })}>💰 Augmenter</button>
      <button onClick={() => dispatch({ type: 'DECREASE_CLIP_COST' })}>💸 Diminuer</button>
      <p>publicDemand {state.publicDemand}%</p>
      <br />
      {state.clipTotal >= 100 ? (
        <div>
          <button onClick={() => dispatch({ type: 'ADD_AUTOCLIPPER' })} disabled={state.funds < state.autoClippersCost}>
            Acheter AutoClipper
          </button>
          {state.autoClippers}
          <p>
            autoClippersCost: <NumberComponent locale="en-US" number={state.autoClippersCost} style="currency" />
          </p>
        </div>
      ) : null}
      <br />
      <p>
        Fil de Fer: <NumberComponent locale="en-US" number={state.wireStock} notation="compact" />
        {state.wireStock <= state.autoClippers ? 'Empty stock!' : ''}
      </p>
      <p>
        wire cost: <NumberComponent locale="en-US" number={state.wireCost} style="currency" />
      </p>
      <button onClick={() => dispatch({ type: 'BUY_WIRE' })} disabled={state.funds < state.wireCost}>
        Buy wire
      </button>
      (+
      <NumberComponent locale="en-US" number={Math.round(state.wireBonus * 1e4)} notation="compact" /> inches)
      <br />
      <br />
      <button onClick={() => dispatch({ type: 'INCREASE_MARKETING' })} disabled={state.funds < state.marketingCost || state.marketing == 10}>
        marketing
      </button>
      level {state.marketing}
      <p>{state.marketingCost} $</p>
      {state.clipTotal >= 2000 ? (
        <div>
          <br />
          Computational Resources
        </div>
      ) : null}
      <br />
      <p>Bonus de production: {Math.round(state.productionBonus * 100)}%</p>
      <button onClick={() => dispatch({ type: 'UPDATE_PRODUCTION_BONUS', productionBonusRatio: 0.1 })}>10%</button>
      <button onClick={() => dispatch({ type: 'UPDATE_PRODUCTION_BONUS', productionBonusRatio: 0.25 })}>25%</button>
      <button onClick={() => dispatch({ type: 'UPDATE_PRODUCTION_BONUS', productionBonusRatio: 0.5 })}>50%</button>
      <button onClick={() => dispatch({ type: 'UPDATE_PRODUCTION_BONUS', productionBonusRatio: 0.75 })}>75%</button>
      <button onClick={() => dispatch({ type: 'UPDATE_PRODUCTION_BONUS', productionBonusRatio: 1 })}>100%</button>
      <p>Bonus de d'achats de fil: {Math.round(state.wireBonus * 100)}%</p>
      <button onClick={() => dispatch({ type: 'UPDATE_WIRE_BONUS', wireBonusRatio: 0.1 })}>10%</button>
      <button onClick={() => dispatch({ type: 'UPDATE_WIRE_BONUS', wireBonusRatio: 0.25 })}>25%</button>
      <button onClick={() => dispatch({ type: 'UPDATE_WIRE_BONUS', wireBonusRatio: 0.5 })}>50%</button>
      <button onClick={() => dispatch({ type: 'UPDATE_WIRE_BONUS', wireBonusRatio: 0.75 })}>75%</button>
      <button onClick={() => dispatch({ type: 'UPDATE_WIRE_BONUS', wireBonusRatio: 1 })}>100%</button>
    </article>
  );
}

export default DashboardComponent;
