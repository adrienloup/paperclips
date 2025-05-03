import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { HarvesterDroneComponent } from '@/src/pages/game/components/dashboard/production/HarvesterDrone.component.tsx';
import { HarvesterDroneCostComponent } from '@/src/pages/game/components/dashboard/production/HarvesterDroneCost.component.tsx';
import { WireDroneCostComponent } from '@/src/pages/game/components/dashboard/production/WireDroneCost.component.tsx';
import { WireDroneComponent } from '@/src/pages/game/components/dashboard/production/WireDrone.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ProductionComponent = () => {
  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Production
      </TitleComponent>
      <HarvesterDroneCostComponent />
      <HarvesterDroneComponent />
      <WireDroneCostComponent />
      <WireDroneComponent />
    </CardComponent>
  );
};
