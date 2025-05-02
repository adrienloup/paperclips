import { useFeatures } from '@/src/pages/game/components/dashboard/features/useFeatures.ts';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { PaperclipPerSecondComponent } from '@/src/pages/game/components/dashboard/manufacturing/PaperclipPerSecond.component.tsx';
import { ByHandComponent } from '@/src/pages/game/components/dashboard/manufacturing/ByHand.component.tsx';
import { WireCostComponent } from '@/src/pages/game/components/dashboard/manufacturing/WireCost.component.tsx';
import { WireComponent } from '@/src/pages/game/components/dashboard/manufacturing/Wire.component.tsx';
import { MachineCostComponent } from '@/src/pages/game/components/dashboard/manufacturing/MachineCost.component.tsx';
import { MachineComponent } from '@/src/pages/game/components/dashboard/manufacturing/Machine.component.tsx';
import { MegaMachineComponent } from '@/src/pages/game/components/dashboard/manufacturing/MegaMachine.component.tsx';
import { MegaMachineCostComponent } from '@/src/pages/game/components/dashboard/manufacturing/MegaMachineCost.component.tsx';
import { WireDroneCostComponent } from '@/src/pages/game/components/dashboard/manufacturing/WireDroneCost.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

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
      <WireDroneCostComponent />
    </CardComponent>
  );
};
