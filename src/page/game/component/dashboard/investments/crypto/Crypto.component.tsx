import { useCallback, useState } from 'react';
import { useInterval } from '@/src/generic/hook/useInterval.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { NumberComponent } from '@/src/generic/common/component/number/Number.component.tsx';
import * as getCrypto from '@/src/page/game/component/dashboard/investments/crypto/Crypto.utils.ts';
import { Crypto } from '@/src/page/game/component/dashboard/investments/crypto/Crypto.type.ts';
import styles from '@/src/page/game/component/dashboard/investments/crypto/Crypto.module.scss';

export const CryptoComponent = ({ name, price, volume }: Crypto) => {
  const [currentPrice, setCurrentPrice] = useState(price);
  const [previousPrice, setPreviousPrice] = useState(price);
  const [currentVolume, setCurrentVolume] = useState(volume);
  const [duration, setDuration] = useState(1000);

  const update = useCallback(() => {
    setPreviousPrice(currentPrice);
    setCurrentPrice(getCrypto.getPrice(currentPrice));
    setCurrentVolume(getCrypto.getVolume(currentVolume));
    setDuration(getCrypto.getInterval());
  }, [currentPrice, currentVolume]);

  const variationPrice = currentPrice - previousPrice;
  const isPositive = variationPrice >= 0;

  useInterval(update, duration);

  return (
    <div className={styles.crypto}>
      <div className={styles.name}>{name}</div>
      <div className={styles.number}>
        <NumberComponent
          value={currentPrice}
          notation="compact"
        />
      </div>
      <div
        className={classNames([styles.variation, isPositive ? styles.positive : styles.negative])}
      >
        {variationPrice.toFixed(2)}
      </div>
      <div className={styles.number}>
        <NumberComponent
          value={currentVolume}
          notation="compact"
        />
      </div>
    </div>
  );
};
