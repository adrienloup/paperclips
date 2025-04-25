import { useEffect } from 'react';
import { useGame } from '@/src/pages/game/useGame.ts';
import { useNoticesDispatch } from '@/src/pages/game/components/dashboard/notices/useNotices.ts';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import * as FeatureHooks from '@/src/pages/game/components/features/useFeatures.ts';
import * as ProjectHooks from '@/src/pages/game/components/dashboard/projects/useProjects.ts';

export const FeaturesComponent = () => {
  const game = useGame();
  const setNotices = useNoticesDispatch();
  const setAlerts = useAlertsDispatch();
  const setFeatures = FeatureHooks.useFeaturesDispatch();
  const features = FeatureHooks.useFeatures();
  const setProjects = ProjectHooks.useProjectsDispatch();
  const projects = ProjectHooks.useProjects();

  const enabledFeature = (id: string, text: string) => {
    setFeatures({ type: 'ENABLED', feature: id });
    setNotices({ type: 'ENABLED', id });
    setAlerts({ type: 'ADD', alert: { id, text } });
  };

  const enabledProject = (id: string, text: string) => {
    setProjects({ type: 'ENABLED', id });
    setNotices({ type: 'ENABLED', id });
    setAlerts({ type: 'ADD', alert: { id, text } });
  };

  const unlockedProject = (id: string) => {
    setProjects({ type: 'UNLOCKED', id });
  };

  useEffect(() => {
    const enabledMachine = game.funds >= 5 && !features.machine;
    if (enabledMachine) {
      enabledFeature('machine', 'test machine');
    }
  }, [game.funds, features.machine]);

  useEffect(() => {
    const enabledMarketing = game.funds >= 200 && !features.marketing;
    if (enabledMarketing) {
      enabledFeature('marketing', 'test marketing');
    }
  }, [game.funds, features.marketing]);

  useEffect(() => {
    const enabledResources = game.paperclip >= 2e3 && !features.resources;
    if (enabledResources) {
      enabledFeature('resources', 'test resources');
    }
  }, [game.paperclip, features.resources]);

  useEffect(() => {
    const revTracker = projects.find((p) => p.id === 'revTracker');
    const enabledRevTracker =
      game.paperclip >= 2e3 && !revTracker?.unlocked && !revTracker?.enabled;
    if (enabledRevTracker) {
      enabledProject('revTracker', 'test revTracker');
    }
  }, [game.paperclip, projects]);

  useEffect(() => {
    const revTracker = projects.find((p) => p.id === 'revTracker');
    const unlockedRevTracker =
      game.operation >= 500 && !revTracker?.unlocked && revTracker?.enabled;
    if (unlockedRevTracker) {
      unlockedProject('revTracker');
    }
  }, [game.operation, projects]);

  useEffect(() => {
    const revTracker = projects.find((p) => p.id === 'revTracker');
    const enabledPaperclipPerSecond =
      revTracker?.unlocked && !revTracker?.enabled && !features.paperclipPerSecond;
    if (enabledPaperclipPerSecond) {
      enabledFeature('paperclipPerSecond', 'test paperclipPerSecond');
    }
  }, [projects, features.megaMachine]);

  useEffect(() => {
    const enabledMegaMachine = game.machine >= 75 && !features.megaMachine;
    if (enabledMegaMachine) {
      enabledFeature('megaMachine', 'test megaMachine');
    }
  }, [game.machine, features.megaMachine]);

  useEffect(() => {
    const algorithmicTrading = projects.find((p) => p.id === 'algorithmicTrading');
    const enabledAlgorithmicTrading =
      game.trust >= 8 && !algorithmicTrading?.unlocked && !algorithmicTrading?.enabled;
    if (enabledAlgorithmicTrading) {
      enabledProject('algorithmicTrading', 'test algorithmicTrading');
    }
  }, [game.trust, projects]);

  useEffect(() => {
    const algorithmicTrading = projects.find((p) => p.id === 'algorithmicTrading');
    const unlockedAlgorithmicTrading =
      game.operation >= 1e4 && !algorithmicTrading?.unlocked && algorithmicTrading?.enabled;
    if (unlockedAlgorithmicTrading) {
      unlockedProject('algorithmicTrading');
    }
  }, [game.operation, projects]);

  useEffect(() => {
    const algorithmicTrading = projects.find((p) => p.id === 'algorithmicTrading');
    const enabledInvestments =
      algorithmicTrading?.unlocked && !algorithmicTrading?.enabled && !features.investments;
    if (enabledInvestments) {
      enabledFeature('investments', 'test investments');
    }
  }, [projects, features.investments]);

  return <></>;
};
