import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ComputationalResourcesComponent = () => {
  //console.log('ComputationalResourcesComponent');
  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Computational resources
      </TitleComponent>
    </CardComponent>
  );
};
