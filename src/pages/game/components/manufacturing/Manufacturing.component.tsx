import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { ProducePerSecondComponent } from '@/src/pages/game/components/produce-per-second/ProducePerSecond.component.tsx';
import { ProduceManualClipsComponent } from '@/src/pages/game/components/produce-manual-clips/ProduceManualClips.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ManufacturingComponent = () => {
  //console.log('ManufacturingComponent');
  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Manufacturing
      </TitleComponent>
      <ProducePerSecondComponent />
      <ProduceManualClipsComponent />
    </CardComponent>
  );
};
