import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ResourcesComponent = () => {
  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Resources
      </TitleComponent>
      Resources
      <div style={{ height: '2000px' }}></div>
    </CardComponent>
  );
};
