import { useFeatures } from '@/src/page/game/component/features/useFeatures.ts';
import { CardComponent } from '@/src/generic/common/component/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/component/title/Title.component.tsx';
import { PaperclipPerSecondComponent } from '@/src/page/game/component/dashboard/manufacturing/PaperclipPerSecond.component.tsx';
import { ByHandComponent } from '@/src/page/game/component/dashboard/manufacturing/ByHand.component.tsx';
import { WireCostComponent } from '@/src/page/game/component/dashboard/manufacturing/WireCost.component.tsx';
import { WireComponent } from '@/src/page/game/component/dashboard/manufacturing/Wire.component.tsx';
import { MachineCostComponent } from '@/src/page/game/component/dashboard/manufacturing/MachineCost.component.tsx';
import { MachineComponent } from '@/src/page/game/component/dashboard/manufacturing/Machine.component.tsx';
import { MegaMachineComponent } from '@/src/page/game/component/dashboard/manufacturing/MegaMachine.component.tsx';
import { MegaMachineCostComponent } from '@/src/page/game/component/dashboard/manufacturing/MegaMachineCost.component.tsx';
import styles from '@/src/generic/common/component/card/Card.module.scss';

export const ManufacturingComponent = () => {
  const feature = useFeatures();

  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Manufacturing
      </TitleComponent>
      {feature.paperclipPerSecond && <PaperclipPerSecondComponent />}
      <ByHandComponent />
      <WireCostComponent />
      <WireComponent />
      {feature.machine && (
        <>
          <MachineCostComponent />
          <MachineComponent />
        </>
      )}
      {feature.megaMachine && (
        <>
          <MegaMachineCostComponent />
          <MegaMachineComponent />
        </>
      )}
    </CardComponent>
  );
};
