import { CryptosComponent } from '@/src/pages/game/components/crypto/Cryptos.component.tsx';
import { WalletComponent } from '@/src/pages/game/components/wallet/Wallet.component.tsx';
import styles from '@/src/pages/game/components/exchange/Exchange.module.scss';

export const ExchangeComponent = () => {
  //console.log('ExchangeComponent');
  return (
    <div className={styles.exchange}>
      <CryptosComponent />
      <WalletComponent />
    </div>
  );
};
