import { CardComponent } from '@/src/generic/common/components/cards/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { EmptyComponent } from '@/src/generic/common/components/empty/Empty.component.tsx';
import styles from '@/src/generic/common/components/cards/card/Card.module.scss';

export const PowerComponent = () => {
  return (
    <CardComponent className={styles.power}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Power
      </TitleComponent>
      <EmptyComponent empty="game.empty.power" />
    </CardComponent>
  );
};
