import { useTranslation } from 'react-i18next';
import { useProjectsDispatch } from '@/src/page/game/component/dashboard/projects/useProjects.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/component/button/Button.component.tsx';
import { Project } from '@/src/page/game/component/dashboard/project/Project.type.ts';
import styles from '@/src/page/game/component/dashboard/project/Project.module.scss';

export const ProjectComponent = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const setProjects = useProjectsDispatch();

  const onClick = (id: string) => setProjects({ type: 'DISABLE', id });

  return (
    <ButtonComponent
      className={classNames([styles.project, !project.unlock ? styles.lock : ''])}
      tabIndex={!project.unlock ? -1 : 0}
      onClick={() => onClick(project.id)}
    >
      {t(`game.project.${project.id}`)}
    </ButtonComponent>
  );
};
