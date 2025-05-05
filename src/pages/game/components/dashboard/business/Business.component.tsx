import { CardComponent } from '@/src/generic/common/components/cards/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { FundsPerSecondComponent } from '@/src/pages/game/components/dashboard/business/FundsPerSecond.component.tsx';
import { FundsComponent } from '@/src/pages/game/components/dashboard/business/Funds.component.tsx';
import { UnsoldInventoryComponent } from '@/src/pages/game/components/dashboard/business/UnsoldInventory.component.tsx';
import { PaperclipPriceComponent } from '@/src/pages/game/components/dashboard/business/PaperclipPrice.component.tsx';
import { PublicDemandComponent } from '@/src/pages/game/components/dashboard/business/PublicDemand.component.tsx';
import { MarketingComponent } from '@/src/pages/game/components/dashboard/business/Marketing.component.tsx';
import styles from '@/src/generic/common/components/cards/card/Card.module.scss';

export const BusinessComponent = () => {
  return (
    <CardComponent className={styles.business}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Business
      </TitleComponent>
      <FundsPerSecondComponent />
      <FundsComponent />
      <UnsoldInventoryComponent />
      <PaperclipPriceComponent />
      <PublicDemandComponent />
      <MarketingComponent />
    </CardComponent>
  );
};
