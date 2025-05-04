import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { HarvesterDroneComponent } from '@/src/pages/game/components/dashboard/production/HarvesterDrone.component.tsx';
import { WireDroneComponent } from '@/src/pages/game/components/dashboard/production/WireDrone.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ProductionComponent = () => {
  return (
    <CardComponent className={styles.production}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Production
      </TitleComponent>
      <HarvesterDroneComponent />
      <WireDroneComponent />
    </CardComponent>
  );
};
