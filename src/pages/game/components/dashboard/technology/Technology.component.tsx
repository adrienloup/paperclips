import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const TechnologyComponent = () => {
  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        technology
      </TitleComponent>
      TechnologyComponent
      <div style={{ height: '2000px' }}></div>
    </CardComponent>
  );
};
