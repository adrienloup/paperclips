import { useProjects } from '@/src/page/game/component/dashboard/projects/useProjects.ts';
import { CardComponent } from '@/src/generic/common/component/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/component/title/Title.component.tsx';
import { ProjectComponent } from '@/src/page/game/component/dashboard/project/Project.component.tsx';
import { Project } from '@/src/page/game/component/dashboard/project/Project.type.ts';
import styles from '@/src/generic/common/component/card/Card.module.scss';
import { EmptyComponent } from '@/src/generic/common/component/empty/Empty.component.tsx';

export const ProjectsComponent = () => {
  const projects = useProjects();
  const projectEnables = projects.filter((project) => project.enable).length;

  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Projects
      </TitleComponent>
      {projectEnables > 0 ? (
        projects.map((project: Project) =>
          project.enable ? (
            <ProjectComponent
              key={project.id}
              project={project}
            />
          ) : null
        )
      ) : (
        <EmptyComponent empty="game.empty.project" />
      )}
    </CardComponent>
  );
};
