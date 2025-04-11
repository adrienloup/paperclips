import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ProductionPerSecondComponent = () => {
  return (
    <DialsComponent>
      <DialComponent
        value={10}
        notation="compact"
        label="Paperclips per second"
      />
      <ClickerComponent
        className={styles.button}
        onClick={() => console.log('ok')}
      >
        +1
      </ClickerComponent>
    </DialsComponent>
  );
};
