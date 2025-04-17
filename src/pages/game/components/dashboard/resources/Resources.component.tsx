import { useFeatures } from '@/src/pages/game/components/features/useFeatures.ts';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { TrustCostComponent } from '@/src/pages/game/components/dashboard/resources/TrustCost.component.tsx';
import { TrustComponent } from '@/src/pages/game/components/dashboard/resources/Trust.component.tsx';
import { MemoryComponent } from '@/src/pages/game/components/dashboard/resources/Memory.component.tsx';
import { ProcessorComponent } from '@/src/pages/game/components/dashboard/resources/Processor.component.tsx';
import { OperationComponent } from '@/src/pages/game/components/dashboard/resources/Operation.component.tsx';
import { CreativityComponent } from '@/src/pages/game/components/dashboard/resources/Creativity.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';
import { EmptyComponent } from '@/src/generic/common/components/empty/Empty.component.tsx';

export const ResourcesComponent = () => {
  const feature = useFeatures();

  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Resources
      </TitleComponent>
      {feature.resources ? (
        <>
          <TrustCostComponent />
          <TrustComponent />
          <MemoryComponent />
          <ProcessorComponent />
          <OperationComponent />
          <CreativityComponent />
        </>
      ) : (
        <EmptyComponent empty="game.empty.resources" />
      )}
    </CardComponent>
  );
};
