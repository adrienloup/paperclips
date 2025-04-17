import { useEffect } from 'react';
import { useGame } from '@/src/pages/game/useGame.ts';
import { useNotificationsDispatch } from '@/src/pages/game/components/notifications/useNotifications.ts';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import * as FeatureHooks from '@/src/pages/game/components/features/useFeatures.ts';
import * as ProjectHooks from '@/src/pages/game/components/dashboard/projects/useProjects.ts';

export const FeaturesComponent = () => {
  const game = useGame();
  const setNotifications = useNotificationsDispatch();
  const setAlerts = useAlertsDispatch();
  const setFeatures = FeatureHooks.useFeaturesDispatch();
  const features = FeatureHooks.useFeatures();
  const setProjects = ProjectHooks.useProjectsDispatch();
  const projects = ProjectHooks.useProjects();

  const enableFeature = (id: string, text: string) => {
    setFeatures({ type: 'ENABLE', feature: id });
    setNotifications({ type: 'ENABLE', id: id });
    setAlerts({ type: 'ADD', alert: { text: text } });
  };

  const enableProject = (id: string, text: string) => {
    setProjects({ type: 'ENABLE', id: id });
    setNotifications({ type: 'ENABLE', id: id });
    setAlerts({ type: 'ADD', alert: { text: text } });
  };

  useEffect(() => {
    const enableMachine = game.funds >= 5 && !features.machine;
    if (enableMachine) {
      enableFeature('machine', 'test machine');
    }
  }, [game.funds, features.machine]);

  useEffect(() => {
    const revTracker = projects.find((p) => p.id === 'revTracker');
    const enableRevTracker = game.paperclip >= 2e3 && !revTracker?.enable;
    if (enableRevTracker) {
      enableProject('revTracker', 'test revTracker');
    }
  }, [game.paperclip, projects]);

  useEffect(() => {
    const enableResources = game.paperclip >= 2e3 && !features.resources;
    if (enableResources) {
      enableFeature('resources', 'test resources');
    }
  }, [game.funds, features.machine]);

  return <div style={{ display: 'none' }}></div>;
};
