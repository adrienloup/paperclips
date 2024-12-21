import { formatNumber } from '../../../generic/utils/formatNumber';
import { Manufacturing } from './Manufacturing.type';
import { CardComponent } from '../../../generic/components/card/Card.component';
import { ButtonComponent } from '../../../generic/components/button/Button.component';
import styles from './Manufacturing.module.scss';

export const ManufacturingComponent = ({
  autoProducers,
  autoProducerCost,
  clipsYield,
  feature,
  wire,
  wireCost,
  buyAutoProducer,
  buyWire,
  produceClip,
}: Manufacturing) => {
  return (
    <CardComponent className={styles.card}>
      <h2>Manufacturing</h2>
      <ButtonComponent className={styles.button} onClick={produceClip}>
        Produire un trombone
      </ButtonComponent>
      <p>Clips per seconde : {clipsYield}</p>
      <div className={styles.group}>
        <ButtonComponent className={styles.button} onClick={buyWire}>
          Fil de fer
        </ButtonComponent>
        <p>{formatNumber(wire)}</p>
      </div>
      <p>Coût : $&nbsp;{wireCost.toFixed(2)}</p>
      {feature.autoProducers ? (
        <div className={styles.autoproducers}>
          <div className={styles.group}>
            <ButtonComponent
              className={styles.button}
              onClick={buyAutoProducer}
            >
              Machines à trombones
            </ButtonComponent>
            <p>{autoProducers}</p>
          </div>
          <p>Coût : $&nbsp;{autoProducerCost.toFixed(2)}</p>
        </div>
      ) : null}
    </CardComponent>
  );
};
