// import { useFeatures } from '@/src/pages/game/components/dashboard/features/useFeatures.ts';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
// import { PaperclipPerSecondComponent } from '@/src/pages/game/components/dashboard/manufacturing/PaperclipPerSecond.component.tsx';
import { ManualComponent } from '@/src/pages/game/components/dashboard/manufacturing/Manual.component.tsx';
import { WireComponent } from '@/src/pages/game/components/dashboard/manufacturing/Wire.component.tsx';
import { MachineComponent } from '@/src/pages/game/components/dashboard/manufacturing/Machine.component.tsx';
import { MegaMachineComponent } from '@/src/pages/game/components/dashboard/manufacturing/MegaMachine.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ManufacturingComponent = () => {
  // const feature = useFeatures();

  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Manufacturing
      </TitleComponent>
      {/*{feature.paperclipPerSecond && <PaperclipPerSecondComponent />}*/}
      <ManualComponent />
      <WireComponent />
      <MachineComponent />
      <MegaMachineComponent />
    </CardComponent>
  );
};
