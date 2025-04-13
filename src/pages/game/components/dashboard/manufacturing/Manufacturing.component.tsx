import { Link } from 'react-router-dom';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { WireComponent } from '@/src/pages/game/components/dashboard/manufacturing/Wire.component.tsx';
import styles from '@/src/pages/game/components/dashboard/manufacturing/Manufacturing.module.scss';

export const ManufacturingComponent = () => {
  return (
    <div className={styles.manufacturing}>
      <div className={styles.buttons}>
        <ClickerComponent
          className={styles.button}
          onClick={() => console.log('ClickerComponent')}
        >
          Make +1
        </ClickerComponent>
        {/*<div className={styles.wireCost}>1</div>*/}
        {/*<div className={styles.wireStock}>1</div>*/}
        <WireComponent />
      </div>
      <div className={styles.infos}>
        <CardComponent>
          start with the stock <Link to="/paperclips/explore/manufacturing">wire</Link> to make a
          paper clip
        </CardComponent>
        <CardComponent>
          the <Link to="/paperclips/explore/manufacturing">price</Link> of wire increases upon
          purchase and decreases over time
        </CardComponent>
      </div>
    </div>
  );
};
