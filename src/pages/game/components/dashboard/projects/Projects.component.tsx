import { useCallback, useEffect } from 'react';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useNoticesDispatch } from '@/src/pages/game/components/dashboard/notices/useNotices.ts';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import { CardComponent } from '@/src/generic/common/components/cards/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { ProjectComponent } from '@/src/pages/game/components/dashboard/projects/project/Project.component.tsx';
import { EmptyComponent } from '@/src/generic/common/components/empty/Empty.component.tsx';
import { Project } from '@/src/pages/game/components/dashboard/projects/project/Project.type.ts';
import styles from '@/src/generic/common/components/cards/card/Card.module.scss';

export const ProjectsComponent = () => {
  const game = useGame();
  const setGame = useGameDispatch();
  const setNotices = useNoticesDispatch();
  const setAlerts = useAlertsDispatch();

  const projectEnables = game.projects.filter((project) => project.enabled).length;

  const enableRevTracker = useCallback(() => {
    const revTracker = game.projects.find((project) => project.id === 'revTracker');
    if (game.paperclip >= 2e3 && !revTracker?.unlocked && !revTracker?.enabled) {
      setGame({ type: 'ENABLE_PROJECT', id: 'revTracker' });
      setNotices({ type: 'ENABLE_NOTICE', id: 'projects' });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'projects', text: 'projects alert' } });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'revTracker', text: 'revTracker alert' } });
    }
  }, [game.projects, game.paperclip]);

  const unlockRevTracker = useCallback(() => {
    const revTracker = game.projects.find((project) => project.id === 'revTracker');
    if (game.operations >= 500 && !revTracker?.unlocked && revTracker?.enabled) {
      setGame({ type: 'UNLOCK_PROJECT', id: 'revTracker' });
    }
  }, [game.projects, game.operations]);

  const enableBegForMoreWire = useCallback(() => {
    const begForMoreWire = game.projects.find((project) => project.id === 'begForMoreWire');
    if (game.trust >= 3 && !begForMoreWire?.unlocked && !begForMoreWire?.enabled) {
      setGame({ type: 'ENABLE_PROJECT', id: 'begForMoreWire' });
      setNotices({ type: 'ENABLE_NOTICE', id: 'begForMoreWire' });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'begForMoreWire', text: 'begForMoreWire alert' } });
    }
  }, [game.projects, game.trust]);

  const unlockBegForMoreWire = useCallback(() => {
    const begForMoreWire = game.projects.find((project) => project.id === 'begForMoreWire');
    if (game.operations >= 550 && !begForMoreWire?.unlocked && begForMoreWire?.enabled) {
      setGame({ type: 'UNLOCK_PROJECT', id: 'begForMoreWire' });
    }
  }, [game.projects, game.operations]);

  const enableAlgorithmicTrading = useCallback(() => {
    const algorithmicTrading = game.projects.find((project) => project.id === 'algorithmicTrading');
    if (game.trust >= 8 && !algorithmicTrading?.unlocked && !algorithmicTrading?.enabled) {
      setGame({ type: 'ENABLE_PROJECT', id: 'algorithmicTrading' });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'algorithmicTrading', text: 'algorithmicTrading alert' } });
    }
  }, [game.projects, game.trust]);

  const unlockAlgorithmicTrading = useCallback(() => {
    const algorithmicTrading = game.projects.find((project) => project.id === 'algorithmicTrading');
    if (game.operations >= 1e4 && !algorithmicTrading?.unlocked && algorithmicTrading?.enabled) {
      setGame({ type: 'UNLOCK_PROJECT', id: 'algorithmicTrading' });
    }
  }, [game.projects, game.operations]);

  const enableHypnoticHarmonics = useCallback(() => {
    const hypnoticHarmonics = game.projects.find((project) => project.id === 'hypnoticHarmonics');
    if (game.trust >= 100 && !hypnoticHarmonics?.unlocked && !hypnoticHarmonics?.enabled) {
      setGame({ type: 'ENABLE_PROJECT', id: 'hypnoticHarmonics' });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'hypnoticHarmonics', text: 'hypnoticHarmonics alert' } });
    }
  }, [game.projects, game.trust]);

  const unlockHypnoticHarmonics = useCallback(() => {
    const hypnoticHarmonics = game.projects.find((project) => project.id === 'hypnoticHarmonics');
    if (game.operations >= 7500 && !hypnoticHarmonics?.unlocked && hypnoticHarmonics?.enabled) {
      setGame({ type: 'UNLOCK_PROJECT', id: 'hypnoticHarmonics' });
    }
  }, [game.projects, game.operations]);

  const enableHypnoticDrones = useCallback(() => {
    const hypnoticHarmonics = game.projects.find((project) => project.id === 'hypnoticHarmonics');
    const hypnoticDrones = game.projects.find((project) => project.id === 'hypnoticDrones');
    if (hypnoticHarmonics?.unlocked && !hypnoticHarmonics?.enabled && !hypnoticDrones?.enabled) {
      setGame({ type: 'UPDATE_MARKETING_BONUS', value: 5 });
      setGame({ type: 'ENABLE_PROJECT', id: 'hypnoticDrones' });
      setGame({ type: 'UPDATE_FEATURE', feature: 'hypnoticHarmonics', value: false });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'hypnoticDrones', text: 'hypnoticDrones alert' } });
    }
  }, [game.projects]);

  const enableSwarmGifts = useCallback(() => {
    const hypnoticDrones = game.projects.find((project) => project.id === 'hypnoticDrones');
    if (hypnoticDrones?.unlocked && !hypnoticDrones?.enabled && !game.feature.swarmGifts && game.feature.trust) {
      setGame({ type: 'UPDATE_FEATURE', feature: 'trust', value: false });
      setGame({ type: 'UPDATE_FEATURE', feature: 'swarmGifts', value: true });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'swarmGifts', text: 'swarmGifts alert' } });
    }
  }, [game.projects, game.feature.swarmGifts, game.feature.trust]);

  useEffect(() => {
    enableRevTracker();
  }, [enableRevTracker]);

  useEffect(() => {
    unlockRevTracker();
  }, [unlockRevTracker]);

  useEffect(() => {
    enableBegForMoreWire();
  }, [enableBegForMoreWire]);

  useEffect(() => {
    unlockBegForMoreWire();
  }, [unlockBegForMoreWire]);

  useEffect(() => {
    enableAlgorithmicTrading();
  }, [enableAlgorithmicTrading]);

  useEffect(() => {
    unlockAlgorithmicTrading();
  }, [unlockAlgorithmicTrading]);

  useEffect(() => {
    enableHypnoticHarmonics();
  }, [enableHypnoticHarmonics]);

  useEffect(() => {
    unlockHypnoticHarmonics();
  }, [unlockHypnoticHarmonics]);

  useEffect(() => {
    unlockHypnoticHarmonics();
  }, [unlockHypnoticHarmonics]);

  useEffect(() => {
    enableHypnoticDrones();
  }, [enableHypnoticDrones]);

  useEffect(() => {
    enableSwarmGifts();
  }, [enableSwarmGifts]);

  return (
    <CardComponent className={styles.projects}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Projects
      </TitleComponent>
      {projectEnables > 0 ? (
        game.projects.map((project: Project) =>
          project.enabled ? (
            <ProjectComponent
              key={project.id}
              project={project}
            />
          ) : null
        )
      ) : (
        <EmptyComponent empty="game.empty" />
      )}
    </CardComponent>
  );
};
