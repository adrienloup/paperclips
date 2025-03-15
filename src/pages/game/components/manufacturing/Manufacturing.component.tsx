import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { ClipsPerSecondComponent } from '@/src/pages/game/components/clips-per-second/ClipsPerSecond.tsx';
import { ProduceManualClipsComponent } from '@/src/pages/game/components/produce-manual-clips/ProduceManualClips.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ManufacturingComponent = () => {
  console.log('ManufacturingComponent');

  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Manufacturing
      </TitleComponent>
      <ClipsPerSecondComponent />
      <ProduceManualClipsComponent />
    </CardComponent>
  );
};
