import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { PaperclipsPerSecondComponent } from '@/src/pages/game/components/dashboard/manufacturing/PaperclipsPerSecondComponent.tsx';
import { WireCostComponent } from '@/src/pages/game/components/dashboard/manufacturing/WireCost.component.tsx';
import { WireComponent } from '@/src/pages/game/components/dashboard/manufacturing/Wire.component.tsx';
import { MachinesCostComponent } from '@/src/pages/game/components/dashboard/manufacturing/MachinesCost.component.tsx';
import { MachinesComponent } from '@/src/pages/game/components/dashboard/manufacturing/Machines.component.tsx';
import { MegamachinesComponent } from '@/src/pages/game/components/dashboard/manufacturing/Megamachines.component.tsx';
import { MegamachinesCostComponent } from '@/src/pages/game/components/dashboard/manufacturing/MegamachinesCost.component.tsx';
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
      <PaperclipsPerSecondComponent />
      <WireCostComponent />
      <WireComponent />
      <MachinesCostComponent />
      <MachinesComponent />
      <MegamachinesCostComponent />
      <MegamachinesComponent />
    </CardComponent>
  );
};
