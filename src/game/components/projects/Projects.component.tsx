import { useDashboard, useDashboardDispatch } from '../dashboard/useDashboard';
import { ProjectComponent } from './Project.component';
import styles from './Projects.module.scss';

export const ProjectsComponent = () => {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();

  const onClickRevTracker = () => {
    setDashboard({
      type: 'UPDATE_DISPLAY_FEATURE',
      feature: 'revTracker',
      enabled: true,
      disabled: true,
      incurred: false,
    });
    setDashboard({
      type: 'UPDATE_DISPLAY_FEATURE',
      feature: 'autoAverage',
      enabled: true,
      disabled: false,
      incurred: false,
    });
  };

  const onClickImprovedProduction = () => {
    setDashboard({
      type: 'UPDATE_DISPLAY_FEATURE',
      feature: 'improvedProduction',
      enabled: true,
      disabled: true,
      incurred: false,
    });
    setDashboard({ type: 'UPDATE_PRODUCTION_RATIO', productionRatio: 0.25 });
  };

  const onAnimationEndRevTracker = () => {
    setDashboard({
      type: 'UPDATE_DISPLAY_FEATURE',
      feature: 'revTracker',
      enabled: true,
      disabled: false,
      incurred: false,
    });
  };

  const onAnimationEndImprovedProduction = () => {
    setDashboard({
      type: 'UPDATE_DISPLAY_FEATURE',
      feature: 'improvedProduction',
      enabled: true,
      disabled: false,
      incurred: false,
    });
  };

  return (
    <div className={styles.projects}>
      {dashboard.feature.revTracker.enabled && !dashboard.feature.revTracker.disabled ? (
        <ProjectComponent
          title="Rev Tracker 1"
          text="Automatically calculates average revenue per second"
          active={dashboard.feature.revTracker.incurred}
          onClick={onClickRevTracker}
          onAnimationEnd={onAnimationEndRevTracker}
        />
      ) : null}
      {dashboard.feature.improvedProduction.enabled && !dashboard.feature.improvedProduction.disabled ? (
        <ProjectComponent
          title="Improved Production"
          text="Increases Production performance 25%"
          active={dashboard.feature.revTracker.incurred}
          onClick={onClickImprovedProduction}
          onAnimationEnd={onAnimationEndImprovedProduction}
        />
      ) : null}
    </div>
  );
};
