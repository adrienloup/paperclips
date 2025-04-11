import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { PaperclipsPerSecondComponent } from '@/src/pages/game/components/dashboard/manufacturing/PaperclipsPerSecondComponent.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';
import { WireComponent } from '@/src/pages/game/components/dashboard/manufacturing/Wire.component.tsx';

export const ManufacturingComponent = () => {
  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Manufacturing
      </TitleComponent>
      <PaperclipsPerSecondComponent />
      <WireComponent />
    </CardComponent>
  );
};
