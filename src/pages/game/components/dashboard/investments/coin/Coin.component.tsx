import { useCallback, useState } from 'react';
import { useCoin } from '@/src/pages/game/components/dashboard/investments/coin/useCoin.ts';
import { useInterval } from '@/src/generic/hooks/useInterval.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import * as getCoin from '@/src/pages/game/components/dashboard/investments/coin/Coin.utils.ts';
import { Coin } from '@/src/pages/game/components/dashboard/investments/coin/Coin.type.ts';
import styles from '@/src/pages/game/components/dashboard/investments/coin/Coin.module.scss';

export const CoinComponent = ({ name, price, volume }: Coin) => {
  const [coin, setCoin] = useCoin();
  const [currentPrice, setCurrentPrice] = useState(price);
  const [previousPrice, setPreviousPrice] = useState(price);
  const [currentVolume, setCurrentVolume] = useState(volume);
  const [duration, setDuration] = useState(1000);

  const update = useCallback(() => {
    const newPrice = getCoin.getPrice(currentPrice);
    const newVolume = getCoin.getVolume(currentVolume);
    const newDuration = getCoin.getInterval();
    const updatedCoin = coin.map((c) => (c.name === name ? { ...c, price: newPrice } : c));
    setPreviousPrice(currentPrice);
    setCurrentPrice(newPrice);
    setCurrentVolume(newVolume);
    setDuration(newDuration);
    setCoin(updatedCoin);
  }, [name, currentPrice, currentVolume]);

  const variationPrice = currentPrice - previousPrice;
  const positive = variationPrice >= 0;

  useInterval(update, duration);

  return (
    <div className={styles.coin}>
      <div className={styles.name}>{name}</div>
      <div className={styles.number}>
        <NumberComponent
          value={currentPrice}
          style="currency"
          notation="compact"
        />
      </div>
      <div className={classNames([styles.variation, positive ? styles.positive : styles.negative])}>
        {positive ? '▲' : '▼'}
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
