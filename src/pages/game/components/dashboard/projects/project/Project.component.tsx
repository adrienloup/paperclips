import { Trans, useTranslation } from 'react-i18next';
import { useGameDispatch } from '@/src/pages/game/useGame.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import { Project } from '@/src/pages/game/components/dashboard/projects/project/Project.type.ts';
import styles from '@/src/pages/game/components/dashboard/projects/project/Project.module.scss';

export const ProjectComponent = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const setGame = useGameDispatch();

  const onClick = (id: string, cost: number) => {
    setGame({ type: 'DISABLE_PROJECT', id, cost });
  };

  return (
    <ButtonComponent
      className={classNames([styles.project, !project.unlocked ? styles.locked : ''])}
      tabIndex={!project.unlocked ? -1 : 0}
      onClick={() => onClick(project.id, parseInt(t(`game.project.${project.id}.cost`)))}
    >
      <Trans
        i18nKey={`game.project.${project.id}.text`}
        components={{
          effect: (
            <NumberComponent
              value={parseInt(t(`game.project.${project.id}.effect`))}
              notation="compact"
            />
          ),
          cost: (
            <NumberComponent
              value={parseInt(t(`game.project.${project.id}.cost`))}
              notation="compact"
            />
          ),
        }}
      />
    </ButtonComponent>
  );
};
