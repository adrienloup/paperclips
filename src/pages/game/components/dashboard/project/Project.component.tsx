import { Trans, useTranslation } from 'react-i18next';
import { useProjectsDispatch } from '@/src/pages/game/components/dashboard/projects/useProjects.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import { Project } from '@/src/pages/game/components/dashboard/project/Project.type.ts';
import styles from '@/src/pages/game/components/dashboard/project/Project.module.scss';

export const ProjectComponent = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const setProjects = useProjectsDispatch();

  const onClick = (id: string) => setProjects({ type: 'DISABLED', id });

  return (
    <ButtonComponent
      className={classNames([styles.project, !project.unlocked ? styles.locked : ''])}
      tabIndex={!project.unlocked ? -1 : 0}
      onClick={() => onClick(project.id)}
    >
      <Trans
        i18nKey={`game.project.${project.id}.text`}
        components={{
          value: (
            <NumberComponent
              value={parseInt(t(`game.project.${project.id}.value`))}
              notation="compact"
            />
          ),
        }}
      />
    </ButtonComponent>
  );
};
