import { useFeatures } from '@/src/pages/game/components/features/useFeatures.ts';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { ProjectsComponent } from '@/src/pages/game/components/project/Projects.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ProjectsAvailableComponent = () => {
  //console.log('ProjectsAvailableComponent');
  const features = useFeatures();

  return (
    <>
      {features.projects && (
        <CardComponent>
          <TitleComponent
            tag="h2"
            className={styles.title}
          >
            Projects
          </TitleComponent>
          <ProjectsComponent />
        </CardComponent>
      )}
    </>
  );
};
