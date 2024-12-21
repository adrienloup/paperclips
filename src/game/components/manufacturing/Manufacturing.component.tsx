import { Manufacturing } from './Manufacturing.type';
import { CardComponent } from '../../../generic/components/card/Card.component';
import styles from './Manufacturing.module.scss';

export const ManufacturingComponent = ({
  autoProducers,
  autoProducerCost,
  unlockedFeatures,
  clipsYield,
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
        Rendement : <strong>{clipsYield}</strong>
      </p>
      <button onClick={produceClip}>Produire un trombone</button>
      <p>
        Fil de fer disponible : <strong>{wire}</strong>
      </p>
      <button onClick={buyWire}>Acheter du fil de fer (+50)</button>
      <p>
        Coût du fil de fer : <strong>$ {wireCost.toFixed(2)}</strong>
      </p>
      {unlockedFeatures.autoProducers ? (
        <>
          <p>
            Machines à trombones : <strong>{autoProducers}</strong>
          </p>
          <button onClick={buyAutoProducer}>
            Acheter une machine à trombones
          </button>
          <p>
            Coût d'une machine :{' '}
            <strong>$ {autoProducerCost.toFixed(2)}</strong>
          </p>
        </>
      ) : null}
    </CardComponent>
  );
};
