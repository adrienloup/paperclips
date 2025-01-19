import { Manufacturing } from '@/src/game/components/manufacturing/Manufacturing.type';
import { CardComponent } from '@/src/common/components/card/Card.component';
import { NumberComponent } from '@/src/common/components/number/Number.component';
import styles from './Manufacturing.module.scss';

export const ManufacturingComponent = ({
  dashboard,
  makeClip,
  buyAutoClippers,
  buyWire,
}: Manufacturing) => {
  return (
    <CardComponent>
      <h2 className={styles.title}>Manufacturing</h2>
      <p>
        Clips par Seconde: <NumberComponent number={dashboard.clipsPerSecond} />
      </p>
      <button onClick={makeClip} disabled={dashboard.wireStock < 1}>
        faire un Clip
      </button>
      <p>
        Fil de Fer: <NumberComponent number={dashboard.wireStock} notation="compact" />
        {dashboard.wireStock < dashboard.autoClippers ? 'Empty stock!' : ''}
      </p>
      <p>
        wire cost: <NumberComponent number={dashboard.wireCost} style="currency" />
      </p>
      <button onClick={buyWire} disabled={dashboard.funds < dashboard.wireCost}>
        Buy wire
      </button>
      (+
      <NumberComponent number={Math.round(dashboard.wireBonus * 1e4)} notation="compact" /> inches)
      <br />
      <br />
      <div>
        <button onClick={buyAutoClippers} disabled={dashboard.funds < dashboard.autoClippersCost}>
          Acheter AutoClipper
        </button>
        {dashboard.autoClippers}
        <p>
          autoClippersCost: <NumberComponent number={dashboard.autoClippersCost} style="currency" />
        </p>
      </div>
    </CardComponent>
  );
};
