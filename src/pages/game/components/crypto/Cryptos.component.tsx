import { CryptoComponent } from '@/src/pages/game/components/crypto/Crypto.component.tsx';
import { cryptosState } from '@/src/pages/game/components/crypto/Cryptos.state.ts';
import styles from '@/src/pages/game/components/crypto/Cryptos.module.scss';

export const CryptosComponent = () => {
  //console.log('CryptosComponent');
  return (
    <div className={styles.cryptos}>
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
