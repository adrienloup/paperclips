import { useFeatures } from '@/src/page/game/component/features/useFeatures.ts';
import { CardComponent } from '@/src/generic/common/component/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/component/title/Title.component.tsx';
import { FundsPerSecondComponent } from '@/src/page/game/component/dashboard/business/FundsPerSecond.component.tsx';
import { FundsComponent } from '@/src/page/game/component/dashboard/business/Funds.component.tsx';
import { UnsoldComponent } from '@/src/page/game/component/dashboard/business/Unsold.component.tsx';
import { PaperclipCostComponent } from '@/src/page/game/component/dashboard/business/PaperclipCost.component.tsx';
import { PublicDemandComponent } from '@/src/page/game/component/dashboard/business/PublicDemand.component.tsx';
import { MarketingCostComponent } from '@/src/page/game/component/dashboard/business/MarketingCost.component.tsx';
import { MarketingComponent } from '@/src/page/game/component/dashboard/business/Marketing.component.tsx';
import styles from '@/src/generic/common/component/card/Card.module.scss';

export const BusinessComponent = () => {
  const feature = useFeatures();

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
      <UnsoldComponent />
      <PaperclipCostComponent />
      <PublicDemandComponent />
      {feature.marketing && (
        <>
          <MarketingCostComponent />
          <MarketingComponent />
        </>
      )}
    </CardComponent>
  );
};
