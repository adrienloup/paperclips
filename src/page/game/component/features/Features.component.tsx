import { useEffect } from 'react';
import { useGame } from '@/src/page/game/useGame.ts';
import { useNotificationsDispatch } from '@/src/page/game/component/dashboard/notifications/useNotifications.ts';
import { useAlertsDispatch } from '@/src/generic/common/component/alerts/useAlerts.ts';
import * as FeatureHooks from '@/src/page/game/component/features/useFeatures.ts';
import * as ProjectHooks from '@/src/page/game/component/dashboard/projects/useProjects.ts';

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
    setNotifications({ type: 'ENABLE', id });
    setAlerts({ type: 'ADD', alert: { id, text } });
  };

  const enableProject = (id: string, text: string) => {
    setProjects({ type: 'ENABLE', id });
    setNotifications({ type: 'ENABLE', id });
    setAlerts({ type: 'ADD', alert: { id, text } });
  };

  const unlockProject = (id: string) => {
    setProjects({ type: 'UNLOCK', id });
  };

  useEffect(() => {
    const enableMachine = game.funds >= 5 && !features.machine;
    if (enableMachine) {
      enableFeature('machine', 'test machine');
    }
  }, [game.funds, features.machine]);

  useEffect(() => {
    const enableMarketing = game.funds >= 200 && !features.marketing;
    if (enableMarketing) {
      enableFeature('marketing', 'test marketing');
    }
  }, [game.funds, features.marketing]);

  useEffect(() => {
    const enableResources = game.paperclip >= 2e3 && !features.resources;
    if (enableResources) {
      enableFeature('resources', 'test resources');
    }
  }, [game.paperclip, features.resources]);

  useEffect(() => {
    const revTracker = projects.find((p) => p.id === 'revTracker');
    const enableRevTracker = game.paperclip >= 2e3 && !revTracker?.unlock && !revTracker?.enable;
    if (enableRevTracker) {
      enableProject('revTracker', 'test revTracker');
    }
  }, [game.paperclip, projects]);

  useEffect(() => {
    const revTracker = projects.find((p) => p.id === 'revTracker');
    const unlockRevTracker = game.operation >= 500 && !revTracker?.unlock && revTracker?.enable;
    if (unlockRevTracker) {
      unlockProject('revTracker');
    }
  }, [game.operation, projects]);

  useEffect(() => {
    const revTracker = projects.find((p) => p.id === 'revTracker');
    const enablePaperclipPerSecond =
      revTracker?.unlock && !revTracker?.enable && !features.paperclipPerSecond;
    if (enablePaperclipPerSecond) {
      enableFeature('paperclipPerSecond', 'test paperclipPerSecond');
    }
  }, [projects, features.megaMachine]);

  useEffect(() => {
    const enableMegaMachine = game.machine >= 75 && !features.megaMachine;
    if (enableMegaMachine) {
      enableFeature('megaMachine', 'test megaMachine');
    }
  }, [game.machine, features.megaMachine]);

  useEffect(() => {
    const algorithmicTrading = projects.find((p) => p.id === 'algorithmicTrading');
    const enableAlgorithmicTrading =
      game.trust >= 8 && !algorithmicTrading?.unlock && !algorithmicTrading?.enable;
    if (enableAlgorithmicTrading) {
      enableProject('algorithmicTrading', 'test algorithmicTrading');
    }
  }, [game.trust, projects]);

  useEffect(() => {
    const algorithmicTrading = projects.find((p) => p.id === 'algorithmicTrading');
    const unlockAlgorithmicTrading =
      game.operation >= 1e4 && !algorithmicTrading?.unlock && algorithmicTrading?.enable;
    if (unlockAlgorithmicTrading) {
      unlockProject('algorithmicTrading');
    }
  }, [game.operation, projects]);

  useEffect(() => {
    const algorithmicTrading = projects.find((p) => p.id === 'algorithmicTrading');
    const enableInvestments =
      algorithmicTrading?.unlock && !algorithmicTrading?.enable && !features.investments;
    if (enableInvestments) {
      enableFeature('investments', 'test investments');
    }
  }, [projects, features.investments]);

  return <></>;
};
