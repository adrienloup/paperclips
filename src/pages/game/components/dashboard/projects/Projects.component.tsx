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

  const enableAlgorithmicTrading = useCallback(() => {
    const algorithmicTrading = game.projects.find((project) => project.id === 'algorithmicTrading');
    if (game.trust >= 8 && !algorithmicTrading?.unlocked && !algorithmicTrading?.enabled) {
      setGame({ type: 'ENABLE_PROJECT', id: 'algorithmicTrading' });
      setNotices({ type: 'ENABLE_NOTICE', id: 'algorithmicTrading' });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'algorithmicTrading', text: 'algorithmicTrading alert' } });
    }
  }, [game.projects, game.trust]);

  const UnlockAlgorithmicTrading = useCallback(() => {
    const algorithmicTrading = game.projects.find((project) => project.id === 'algorithmicTrading');
    if (game.operation >= 1e4 && !algorithmicTrading?.unlocked && algorithmicTrading?.enabled) {
      setGame({ type: 'UNLOCK_PROJECT', id: 'algorithmicTrading' });
    }
  }, [game.projects, game.operation]);

  useEffect(() => {
    enableAlgorithmicTrading();
  }, [enableAlgorithmicTrading]);

  useEffect(() => {
    UnlockAlgorithmicTrading();
  }, [UnlockAlgorithmicTrading]);

  return (
    <CardComponent>
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
