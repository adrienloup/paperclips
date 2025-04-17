import { CryptoComponent } from '@/src/page/game/component/dashboard/investments/crypto/Crypto.component.tsx';
import { cryptosState } from '@/src/page/game/component/dashboard/investments/crypto/Crypto.state.ts';
import styles from '@/src/page/game/component/dashboard/investments/exchange/Exchange.module.scss';

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
