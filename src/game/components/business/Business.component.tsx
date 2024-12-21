import { Business } from './Business.type';
import { CardComponent } from '../../../generic/components/card/Card.component';
import { ButtonComponent } from '../../../generic/components/button/Button.component';
import styles from './Business.module.scss';
import { formatNumber } from '../../../generic/utils/formatNumber';

export const BusinessComponent = ({
  clipsCost,
  funds,
  inventory,
  marketing,
  marketingCost,
  publicDemand,
  feature,
  decreaseClipsCost,
  increaseClipsCost,
  buyMarketing,
}: Business) => {
  return (
    <CardComponent className={styles.card}>
      <h2>Business</h2>
      <p>
        Fonds disponibles :{' '}
        <strong>{formatNumber(parseFloat(funds.toFixed(2)))}&nbsp;€</strong>
      </p>
      <p>
        Inventaire invendu : <strong>{inventory.toFixed()}</strong>
      </p>
      <p>
        Demande du public : <strong>{publicDemand.toFixed()}&nbsp;%</strong>
      </p>
      <div>
        <ButtonComponent className={styles.button} onClick={decreaseClipsCost}>
          Diminuer le prix
        </ButtonComponent>
        <ButtonComponent className={styles.button} onClick={increaseClipsCost}>
          Augmenter le prix
        </ButtonComponent>
      </div>
      <p>
        Price per Clip : <strong>$&nbsp;{clipsCost.toFixed(2)}</strong>
      </p>
      {feature.marketing ? (
        <>
          <p>
            Marketing : <strong>niveau {marketing}</strong>
          </p>
          <ButtonComponent className={styles.button} onClick={buyMarketing}>
            Acheter une campagne
          </ButtonComponent>
          <p>
            Coût d'une campagne :{' '}
            <strong>$&nbsp;{marketingCost.toFixed(2)}</strong>
          </p>
        </>
      ) : null}
    </CardComponent>
  );
};
