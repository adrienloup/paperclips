import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { FundsPerSecondComponent } from '@/src/pages/game/components/funds-per-second/FundsPerSecond.component.tsx';
import { UnsoldInventoryComponent } from '@/src/pages/game/components/unsold-inventory/UnsoldInventory.component.tsx';
import { FundsAvailableComponent } from '@/src/pages/game/components/funds-available/FundsAvailable.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const BusinessComponent = () => {
  //console.log('BusinessComponent');
  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Business
      </TitleComponent>
      <FundsPerSecondComponent />
      <UnsoldInventoryComponent />
      <FundsAvailableComponent />
    </CardComponent>
  );
};
