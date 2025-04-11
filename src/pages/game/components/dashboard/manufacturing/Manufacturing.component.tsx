import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { ProductionPerSecondComponent } from '@/src/pages/game/components/dashboard/manufacturing/ProductionPerSecond.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ManufacturingComponent = () => {
  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        manufacturing
      </TitleComponent>
      <ProductionPerSecondComponent />
    </CardComponent>
  );
};
