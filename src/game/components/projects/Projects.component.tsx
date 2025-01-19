import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { CardComponent } from '@/src/common/components/cards/Card.component';
import { TitleComponent } from '@/src/common/components/title/Title.component';
import { ProjectComponent } from '@/src/game/components/projects/Project.component';

export const ProjectsComponent = () => {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();

  const onClickRevTracker = () => {
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

  const onClickImprovedProduction = () => {
    setDashboard({
      type: 'UPDATE_DISPLAY_FEATURE',
      feature: 'improvedProduction',
      enabled: true,
      incurred: false,
    });
    setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', ratio: 0.25 });
  };

  const onAnimationEndRevTracker = () => {
    setDashboard({
      type: 'UPDATE_DISPLAY_FEATURE',
      feature: 'revTracker',
      enabled: true,
      incurred: false,
    });
  };

  const onAnimationEndImprovedProduction = () => {
    setDashboard({
      type: 'UPDATE_DISPLAY_FEATURE',
      feature: 'improvedProduction',
      enabled: true,
      incurred: false,
    });
  };

  return (
    <CardComponent>
      <TitleComponent title="Projects" />
      {dashboard.feature.revTracker.enabled ? (
        <ProjectComponent
          title="Rev Tracker 1"
          text="Automatically calculates average revenue per second"
          incurred={dashboard.feature.revTracker.incurred}
          onClick={onClickRevTracker}
          onAnimationEnd={onAnimationEndRevTracker}
        />
      ) : null}
      {dashboard.feature.improvedProduction.enabled ? (
        <ProjectComponent
          title="Improved Production"
          text="Increases Production performance 25%"
          incurred={dashboard.feature.revTracker.incurred}
          onClick={onClickImprovedProduction}
          onAnimationEnd={onAnimationEndImprovedProduction}
        />
      ) : null}
    </CardComponent>
  );
};
