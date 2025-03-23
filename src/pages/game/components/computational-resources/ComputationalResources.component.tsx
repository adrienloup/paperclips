import { useFeatures } from '@/src/pages/game/components/features/useFeatures.ts';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TrustComponent } from '@/src/pages/game/components/trust/Trust.component.tsx';
import { ProcessorsComponent } from '@/src/pages/game/components/processors/Processors.component.tsx';
import { MemoryComponent } from '@/src/pages/game/components/memory/Memory.component.tsx';
import { OperationsComponent } from '@/src/pages/game/components/operations/Operations.component.tsx';
import { CreativityComponent } from '@/src/pages/game/components/creativity/Creativity.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ComputationalResourcesComponent = () => {
  //console.log('ComputationalResourcesComponent');
  const features = useFeatures();

  return (
    <>
      {features.trust && (
        <CardComponent>
          <TitleComponent
            tag="h2"
            className={styles.title}
          >
            Computational resources
          </TitleComponent>
          <TrustComponent />
          <MemoryComponent />
          <ProcessorsComponent />
          <OperationsComponent />
          <CreativityComponent />
        </CardComponent>
      )}
    </>
  );
};
