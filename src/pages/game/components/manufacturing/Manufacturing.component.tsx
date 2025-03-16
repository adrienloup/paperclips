import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { ProducePerSecondComponent } from '@/src/pages/game/components/produce-per-second/ProducePerSecond.component.tsx';
import { WireComponent } from '@/src/pages/game/components/wire/Wire.component.tsx';
import { AutoClippersComponent } from '@/src/pages/game/components/autoclippers/AutoClippers.component.tsx';
import { MegaClippersComponent } from '@/src/pages/game/components/megaclippers/MegaClippers.component.tsx';
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
      <WireComponent />
      <AutoClippersComponent />
      <MegaClippersComponent />
    </CardComponent>
  );
};
