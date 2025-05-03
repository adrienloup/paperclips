import { classNames } from '@/src/generic/utils/classNames.ts';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import { Crypto } from '@/src/pages/game/components/dashboard/investments/crypto/Crypto.type.ts';
import styles from '@/src/pages/game/components/dashboard/investments/crypto/Crypto.module.scss';

export const CryptoComponent = ({ name, price, volume, change }: Crypto) => {
  return (
    <div className={styles.crypto}>
      <div className={styles.name}>{name}</div>
      <div className={styles.number}>
        <NumberComponent
          value={price}
          style="currency"
          notation="compact"
        />
      </div>
      <div className={classNames([styles.variation, change >= 0 ? styles.positive : styles.negative])}>
        {change > 0 ? '▲' : '▼'}
        <NumberComponent
          value={Math.abs(change)}
          notation="compact"
        />
      </div>
      <div className={styles.number}>
        <NumberComponent
          value={volume}
          notation="compact"
        />
      </div>
    </div>
  );
};
