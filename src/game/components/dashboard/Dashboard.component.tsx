import { useEffect } from 'react';
import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { TotalComponent } from '@/src/game/components/total/Total.component';
import { CardsComponent } from '@/src/common/components/cards/Cards.component';
import { CardsGroupComponent } from '@/src/common/components/cards/CardsGroup.component';
import { ManufacturingComponent } from '@/src/game/components/manufacturing/Manufacturing.component';
import { BusinessComponent } from '@/src/game/components/business/Business.component';
import { ComputationalComponent } from '@/src/game/components/computational/Computational.component';
import { ProjectsComponent } from '@/src/game/components/projects/Projects.component';
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
    if (
      !dashboard.feature.autoClippers.enabled &&
      dashboard.clipTotal >= 100 &&
      dashboard.clipTotal < 10000
    ) {
      setDashboard({
        type: 'UPDATE_DISPLAY_FEATURE',
        feature: 'autoClippers',
        enabled: true,
        incurred: false,
      });
    }
    if (!dashboard.feature.marketing.enabled && dashboard.clipTotal >= 200) {
      setDashboard({
        type: 'UPDATE_DISPLAY_FEATURE',
        feature: 'marketing',
        enabled: true,
        incurred: false,
      });
    }
    if (!dashboard.feature.business.enabled && dashboard.clipTotal >= 1000) {
      setDashboard({
        type: 'UPDATE_DISPLAY_FEATURE',
        feature: 'business',
        enabled: true,
        incurred: false,
      });
    }
    if (!dashboard.feature.computationalResources.enabled && dashboard.clipTotal >= 2000) {
      setDashboard({
        type: 'UPDATE_DISPLAY_FEATURE',
        feature: 'computationalResources',
        enabled: true,
        incurred: false,
      });
    }
    if (!dashboard.feature.projects.enabled && dashboard.clipTotal >= 2000) {
      setDashboard({
        type: 'UPDATE_DISPLAY_FEATURE',
        feature: 'projects',
        enabled: true,
        incurred: false,
      });
    }
  }, [dashboard.clipTotal]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDashboard({ type: 'UPDATE_PER_SECOND' });
    }, 1e3);
    return () => clearInterval(interval);
  }, []);

  const onRevTrackerClick = () => {
    setDashboard({
      type: 'UPDATE_DISPLAY_FEATURE',
      feature: 'revTracker',
      enabled: false,
      incurred: false,
    });
    setDashboard({
      type: 'UPDATE_DISPLAY_FEATURE',
      feature: 'autoAverage',
      enabled: true,
      incurred: false,
    });
  };

  const onImprovedProductionClick = () => {
    setDashboard({
      type: 'UPDATE_DISPLAY_FEATURE',
      feature: 'improvedProduction',
      enabled: true,
      incurred: false,
    });
    setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', ratio: 0.25 });
  };

  return (
    <article className={styles.dashboard}>
      <TotalComponent dashboard={dashboard} />
      <CardsComponent>
        <ManufacturingComponent
          dashboard={dashboard}
          makeClip={() => setDashboard({ type: 'ADD_CLIP' })}
          buyAutoClippers={() => setDashboard({ type: 'ADD_AUTOCLIPPER' })}
          buyWire={() => setDashboard({ type: 'ADD_WIRE' })}
        />
        {dashboard.feature.business.enabled ? (
          <BusinessComponent
            dashboard={dashboard}
            decreaseClipCost={() => setDashboard({ type: 'DECREASE_CLIP_COST' })}
            increaseClipCost={() => setDashboard({ type: 'INCREASE_CLIP_COST' })}
            updateMarketing={() => setDashboard({ type: 'UPDATE_MARKETING' })}
          />
        ) : null}
        {dashboard.feature.computationalResources.enabled || dashboard.feature.projects.enabled ? (
          <CardsGroupComponent>
            {dashboard.feature.computationalResources.enabled ? (
              <ComputationalComponent dashboard={dashboard} />
            ) : null}
            {dashboard.feature.projects.enabled ? (
              <ProjectsComponent
                dashboard={dashboard}
                onRevTrackerClick={onRevTrackerClick}
                onImprovedProductionClick={onImprovedProductionClick}
                onRevTrackerAnimationEnd={() =>
                  setDashboard({
                    type: 'UPDATE_DISPLAY_FEATURE',
                    feature: 'revTracker',
                    enabled: true,
                    incurred: false,
                  })
                }
                onImprovedProductionAnimationEnd={() =>
                  setDashboard({
                    type: 'UPDATE_DISPLAY_FEATURE',
                    feature: 'improvedProduction',
                    enabled: true,
                    incurred: false,
                  })
                }
              />
            ) : null}
          </CardsGroupComponent>
        ) : null}
      </CardsComponent>
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
