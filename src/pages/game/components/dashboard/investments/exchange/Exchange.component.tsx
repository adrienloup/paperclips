import { CryptoComponent } from '@/src/pages/game/components/dashboard/investments/crypto/Crypto.component.tsx';
import { cryptosState } from '@/src/pages/game/components/dashboard/investments/crypto/Crypto.state.ts';
import styles from '@/src/pages/game/components/dashboard/investments/exchange/Exchange.module.scss';

export const ExchangeComponent = () => {
  return (
    <div className={styles.exchange}>
      {cryptosState.map((crypto) => (
        <CryptoComponent
          key={crypto.name}
          name={crypto.name}
          price={crypto.price}
          volume={crypto.volume}
        />
      ))}
    </div>
  );
};
