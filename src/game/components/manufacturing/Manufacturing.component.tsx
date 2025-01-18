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
    <CardComponent className={styles.card}>
      <h2>Manufacturing</h2>
      <p>
        Clips par Seconde: <NumberComponent locale="en-US" number={dashboard.clipsPerSecond} />
      </p>
      <button onClick={makeClip}>faire un Clip</button>
      <button onClick={buyAutoClippers} disabled={dashboard.funds < dashboard.autoClippersCost}>
        Acheter AutoClipper
      </button>
      {dashboard.autoClippers}
      <p>
        autoClippersCost:{' '}
        <NumberComponent locale="en-US" number={dashboard.autoClippersCost} style="currency" />
      </p>
      <p>
        Fil de Fer:{' '}
        <NumberComponent locale="en-US" number={dashboard.wireStock} notation="compact" />
        {dashboard.wireStock <= dashboard.autoClippers ? 'Empty stock!' : ''}
      </p>
      <p>
        wire cost: <NumberComponent locale="en-US" number={dashboard.wireCost} style="currency" />
      </p>
      <button onClick={buyWire} disabled={dashboard.funds < dashboard.wireCost}>
        Buy wire
      </button>
      (+
      <NumberComponent
        locale="en-US"
        number={Math.round(dashboard.wireBonus * 1e4)}
        notation="compact"
      />{' '}
      inches)
    </CardComponent>
  );
};
