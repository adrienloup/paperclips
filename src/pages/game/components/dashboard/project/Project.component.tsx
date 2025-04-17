import { useTranslation } from 'react-i18next';
import { useProjectsDispatch } from '@/src/pages/game/components/dashboard/projects/useProjects.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { Project } from '@/src/pages/game/components/dashboard/project/Project.type.ts';
import styles from '@/src/pages/game/components/dashboard/project/Project.module.scss';

export const ProjectComponent = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const setProjects = useProjectsDispatch();

  const disableClick = () => setProjects({ type: 'DISABLE', id: project.id });

  return (
    <ButtonComponent
      className={classNames([styles.project, project.lock ? styles.lock : ''])}
      tabIndex={project.lock ? -1 : 0}
      to={`/paperclips/explore/${project.id}`}
      triggerClick={disableClick}
    >
      {t(`game.project.${project.id}`)}
    </ButtonComponent>
  );
};
