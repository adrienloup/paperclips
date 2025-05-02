import { useFeatures } from '@/src/pages/game/components/dashboard/features/useFeatures.ts';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { FundsPerSecondComponent } from '@/src/pages/game/components/dashboard/business/FundsPerSecond.component.tsx';
import { FundsComponent } from '@/src/pages/game/components/dashboard/business/Funds.component.tsx';
import { UnsoldComponent } from '@/src/pages/game/components/dashboard/business/Unsold.component.tsx';
import { PaperclipCostComponent } from '@/src/pages/game/components/dashboard/business/PaperclipCost.component.tsx';
import { PublicDemandComponent } from '@/src/pages/game/components/dashboard/business/PublicDemand.component.tsx';
import { MarketingCostComponent } from '@/src/pages/game/components/dashboard/business/MarketingCost.component.tsx';
import { MarketingComponent } from '@/src/pages/game/components/dashboard/business/Marketing.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

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
