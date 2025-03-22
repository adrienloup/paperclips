import { Crypto } from '@/src/pages/game/components/crypto/Crypto.type.ts';
import { CryptoComponent } from '@/src/pages/game/components/crypto/Crypto.component.tsx';
import styles from '@/src/pages/game/components/crypto/Cryptos.module.scss';

const cryptos: Crypto[] = [
  { name: 'btc', price: 77579, volume: 13941210739054 },
  { name: 'eth', price: 1830.5, volume: 7691270039894 },
  { name: 'bnb', price: 576.17, volume: 1181610139861 },
  { name: 'usdc', price: 0.92297, volume: 554619139113 },
];

export const CryptosComponent = () => {
  //console.log('CryptosComponent');
  return (
    <div className={styles.cryptos}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Variation (%)</th>
            <th>Volume ($)</th>
            <th>Update (s)</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <CryptoComponent
              key={crypto.name}
              name={crypto.name}
              price={crypto.price}
              volume={crypto.volume}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
