import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { PaperclipPerSecondComponent } from '@/src/pages/game/components/dashboard/manufacturing/PaperclipPerSecond.component.tsx';
import { ProduceManuallyComponent } from '@/src/pages/game/components/dashboard/manufacturing/ProduceManually.component.tsx';
import { WireComponent } from '@/src/pages/game/components/dashboard/manufacturing/Wire.component.tsx';
import { MachineComponent } from '@/src/pages/game/components/dashboard/manufacturing/Machine.component.tsx';
import { MegaMachineComponent } from '@/src/pages/game/components/dashboard/manufacturing/MegaMachine.component.tsx';
import { FactoryComponent } from '@/src/pages/game/components/dashboard/manufacturing/Factory.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ManufacturingComponent = () => {
  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Manufacturing
      </TitleComponent>
      <PaperclipPerSecondComponent />
      <ProduceManuallyComponent />
      <WireComponent />
      <MachineComponent />
      <MegaMachineComponent />
      <FactoryComponent />
    </CardComponent>
  );
};
