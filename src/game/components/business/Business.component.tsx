import { Business } from './Business.type';
import { CardComponent } from '../../../generic/components/card/Card.component';
import styles from './Business.module.scss';

export const BusinessComponent = ({
  funds,
  inventory,
  publicDemand,
  clipsCost,
  decreaseClipsCost,
  increaseClipsCost,
}: Business) => {
  return (
    <CardComponent className={styles.card}>
      <h2>Business</h2>
      <p>
        Fonds disponibles : <strong>{funds.toFixed(2)} €</strong>
      </p>
      <p>
        Inventaire invendu : <strong>{inventory.toFixed()}</strong>
      </p>
      <p>
        Public Demande : <strong>{publicDemand.toFixed()}%</strong>
      </p>
      <button onClick={decreaseClipsCost}>Baisser le prix</button>
      <button onClick={increaseClipsCost}>AUgmenter le prix</button>
      <p>
        Price per Clip: <strong>$ {clipsCost.toFixed(2)}</strong>
      </p>
    </CardComponent>
  );
};
