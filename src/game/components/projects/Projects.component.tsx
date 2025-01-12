import { useProjects, useProjectsDispatch } from './useProjects';
import { Project } from './Project.type';
import { ProjectComponent } from './Project.component';
import styles from './Projects.module.scss';

export const ProjectsComponent = () => {
  const projectsDispatch = useProjectsDispatch();
  const projects = useProjects();

  return (
    <div className={styles.projects}>
      {projects.map((project: Project) => (
        <ProjectComponent
          key={project.id}
          id={project.id}
          title="title"
          text="text"
          active={project.active}
          onClick={() => {
            projectsDispatch({
              type: 'DELETED',
              id: project.id,
            });
          }}
          onAnimationEnd={() => {
            projectsDispatch({
              type: 'DISABLED',
              id: project.id,
            });
          }}
        />
      ))}
    </div>
  );
};
