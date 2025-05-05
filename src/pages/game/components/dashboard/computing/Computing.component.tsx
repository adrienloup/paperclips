import { CardComponent } from '@/src/generic/common/components/cards/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { SwarmComputingComponent } from '@/src/pages/game/components/dashboard/computing/SwarmComputing.component.tsx';
import styles from '@/src/generic/common/components/cards/card/Card.module.scss';

export const ComputingComponent = () => {
  return (
    <CardComponent className={styles.computing}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Computing
      </TitleComponent>
      <SwarmComputingComponent />
    </CardComponent>
  );
};
