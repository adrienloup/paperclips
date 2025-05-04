import { Trans, useTranslation } from 'react-i18next';
import { useGameDispatch } from '@/src/pages/game/useGame.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import { Project } from '@/src/pages/game/components/dashboard/project/Project.type.ts';
import styles from '@/src/pages/game/components/dashboard/project/Project.module.scss';

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
      onClick={() => onClick(project.id, project.cost)}
    >
      <span className={styles.title}>{t(`game.project.${project.id}.title`)}</span>
      <span className={styles.value}>
        <Trans
          i18nKey={`game.project.${project.id}.cost`}
          components={{
            value1: (
              <NumberComponent
                value={parseInt(t(`game.project.${project.id}.value1`))}
                notation="compact"
              />
            ),
            value2: (
              <NumberComponent
                value={parseInt(t(`game.project.${project.id}.value2`))}
                notation="compact"
              />
            ),
          }}
        />
      </span>
      <span className={styles.text}>{t(`game.project.${project.id}.text`)}</span>
    </ButtonComponent>
  );
};
