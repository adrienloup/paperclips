import { useFeatures } from '@/src/page/game/component/features/useFeatures.ts';
import { CardComponent } from '@/src/generic/common/component/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/component/title/Title.component.tsx';
import { TrustCostComponent } from '@/src/page/game/component/dashboard/resources/TrustCost.component.tsx';
import { TrustComponent } from '@/src/page/game/component/dashboard/resources/Trust.component.tsx';
import { MemoryComponent } from '@/src/page/game/component/dashboard/resources/Memory.component.tsx';
import { ProcessorComponent } from '@/src/page/game/component/dashboard/resources/Processor.component.tsx';
import { OperationComponent } from '@/src/page/game/component/dashboard/resources/Operation.component.tsx';
import { CreativityComponent } from '@/src/page/game/component/dashboard/resources/Creativity.component.tsx';
import { EmptyComponent } from '@/src/generic/common/component/empty/Empty.component.tsx';
import styles from '@/src/generic/common/component/card/Card.module.scss';

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
