import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { FundsPerSecondComponent } from '@/src/pages/game/components/dashboard/business/FundsPerSecond.component.tsx';
import { FundsComponent } from '@/src/pages/game/components/dashboard/business/Funds.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const BusinessComponent = () => {
  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Business
      </TitleComponent>
      <FundsPerSecondComponent />
      <FundsComponent />
    </CardComponent>
  );
};
