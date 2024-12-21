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
        Fonds disponibles : {formatNumber(parseFloat(funds.toFixed(2)))}&nbsp;€
      </p>
      <p>Inventaire invendu : {inventory.toFixed()}</p>
      <p>Demande : {publicDemand.toFixed()}&nbsp;%</p>
      <div className={styles.group}>
        <ButtonComponent className={styles.button} onClick={decreaseClipsCost}>
          Diminuer
        </ButtonComponent>
        <ButtonComponent className={styles.button} onClick={increaseClipsCost}>
          Augmenter
        </ButtonComponent>
      </div>
      <p>Price per clip: $&nbsp;{clipsCost.toFixed(2)}</p>
      {feature.marketing ? (
        <div className={styles.marketing}>
          <div className={styles.group}>
            <ButtonComponent className={styles.button} onClick={buyMarketing}>
              Marketing
            </ButtonComponent>
            <p>Niveau {marketing}</p>
          </div>
          <p>Coût : $&nbsp;{marketingCost.toFixed(2)}</p>
        </div>
      ) : null}
    </CardComponent>
  );
};
