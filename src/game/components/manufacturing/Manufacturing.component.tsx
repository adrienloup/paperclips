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
      <p>
        Clips per seconde : <strong>{clipsYield}</strong>
      </p>
      <ButtonComponent className={styles.button} onClick={produceClip}>
        Produire un trombone
      </ButtonComponent>
      <p>
        Fil de fer disponible : <strong>{formatNumber(wire)}</strong>
      </p>
      <ButtonComponent className={styles.button} onClick={buyWire}>
        Acheter du fil de fer (50)
      </ButtonComponent>
      <p>
        Coût du fil de fer : <strong>$&nbsp;{wireCost.toFixed(2)}</strong>
      </p>
      {feature.autoProducers ? (
        <>
          <p>
            Machines à trombones : <strong>{autoProducers}</strong>
          </p>
          <ButtonComponent className={styles.button} onClick={buyAutoProducer}>
            Acheter une machine
          </ButtonComponent>
          <p>
            Coût d'une machine :{' '}
            <strong>$&nbsp;{autoProducerCost.toFixed(2)}</strong>
          </p>
        </>
      ) : null}
    </CardComponent>
  );
};
