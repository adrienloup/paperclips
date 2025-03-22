import { useCallback, useState } from 'react';
import { useInterval } from '@/src/generic/hooks/useInterval.ts';
import { getInterval, getPrice, getVolume } from '@/src/pages/game/components/crypto/Crypto.utils.ts';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import { Crypto } from '@/src/pages/game/components/crypto/Crypto.type.ts';
import styles from '@/src/pages/game/components/crypto/Crypto.module.scss';

export const CryptoComponent = ({ name, price, volume }: Crypto) => {
  //console.log('CryptoComponent');
  const [currentPrice, setCurrentPrice] = useState(price);
  const [previousPrice, setPreviousPrice] = useState(price);
  const [currentVolume, setCurrentVolume] = useState(volume);
  const [duration, setDuration] = useState(getInterval());

  const update = useCallback(() => {
    setPreviousPrice(currentPrice);
    setCurrentPrice(getPrice(currentPrice));
    setCurrentVolume(getVolume(currentVolume));
    setDuration(getInterval());
  }, [currentPrice, currentVolume]);

  const variationPrice = currentPrice - previousPrice;
  const isPositive = variationPrice >= 0;

  useInterval(update, duration);

  return (
    <tr className={styles.crypto}>
      <td>{name}</td>
      <td>
        <NumberComponent
          value={currentPrice}
          notation="compact"
        />
      </td>
      <td className={isPositive ? styles.positive : styles.negative}>
        {isPositive ? '▲' : '▼'} {variationPrice.toFixed(2)}
      </td>
      <td>
        <NumberComponent
          value={currentVolume}
          notation="compact"
        />
      </td>
      <td>{duration / 1000}</td>
    </tr>
  );
};
