import { useCallback, useEffect } from 'react';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useNoticesDispatch } from '@/src/pages/game/components/dashboard/notices/useNotices.ts';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { ProjectComponent } from '@/src/pages/game/components/dashboard/project/Project.component.tsx';
import { EmptyComponent } from '@/src/generic/common/components/empty/Empty.component.tsx';
import { Project } from '@/src/pages/game/components/dashboard/project/Project.type.ts';
import styles from '@/src/generic/common/components/card/Card.module.scss';

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
    if (game.operation >= 500 && !revTracker?.unlocked && revTracker?.enabled) {
      setGame({ type: 'UNLOCK_PROJECT', id: 'revTracker' });
    }
  }, [game.projects, game.operation]);

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
    if (game.operation >= 5e2 && !begForMoreWire?.unlocked && begForMoreWire?.enabled) {
      setGame({ type: 'UNLOCK_PROJECT', id: 'begForMoreWire' });
    }
  }, [game.projects, game.operation]);

  const enableAlgorithmicTrading = useCallback(() => {
    const algorithmicTrading = game.projects.find((project) => project.id === 'algorithmicTrading');
    if (game.trust >= 8 && !algorithmicTrading?.unlocked && !algorithmicTrading?.enabled) {
      setGame({ type: 'ENABLE_PROJECT', id: 'algorithmicTrading' });
      setNotices({ type: 'ENABLE_NOTICE', id: 'algorithmicTrading' });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'algorithmicTrading', text: 'algorithmicTrading alert' } });
    }
  }, [game.projects, game.trust]);

  const unlockAlgorithmicTrading = useCallback(() => {
    const algorithmicTrading = game.projects.find((project) => project.id === 'algorithmicTrading');
    if (game.operation >= 1e4 && !algorithmicTrading?.unlocked && algorithmicTrading?.enabled) {
      setGame({ type: 'UNLOCK_PROJECT', id: 'algorithmicTrading' });
    }
  }, [game.projects, game.operation]);

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
        <EmptyComponent
          className={styles.empty}
          empty="game.empty.project"
        />
      )}
    </CardComponent>
  );
};
