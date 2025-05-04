import { classNames } from '@/src/generic/utils/classNames.ts';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import { Token } from '@/src/pages/game/components/dashboard/investments/token/Token.type.ts';
import styles from '@/src/pages/game/components/dashboard/investments/token/Token.module.scss';

export const TokenComponent = ({ name, price, volume, change }: Token) => {
  return (
    <div className={styles.token}>
      <div className={styles.price}>
        <NumberComponent
          value={price}
          style="currency"
          notation="compact"
        />
      </div>
      <div className={classNames([styles.variation, change >= 0 ? styles.positive : styles.negative])}>
        {change > 0 ? '+' : '-'}
        <NumberComponent
          value={Math.abs(change)}
          notation="compact"
        />
      </div>
      <div className={styles.volume}>
        <NumberComponent
          value={volume}
          notation="compact"
        />
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};
