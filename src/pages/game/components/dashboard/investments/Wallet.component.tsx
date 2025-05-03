// import { Fragment } from 'react';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useExchange } from '@/src/pages/game/components/dashboard/investments/exchange/useExchange.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { CryptoName } from '@/src/pages/game/components/dashboard/investments/crypto/Crypto.type.ts';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const WalletComponent = () => {
  const setGame = useGameDispatch();
  const game = useGame();
  const { cryptos } = useExchange();

  // const cryptoEnables = game.wallet.filter((crypto) => crypto.quantity > 0).length;

  const decreaseWallet = (crypto: string, price: number) => setGame({ type: 'DECREASE_WALLET', crypto, price });
  const increaseWallet = (crypto: string, price: number) => setGame({ type: 'INCREASE_WALLET', crypto, price });

  const getPrice = (crypto: string) => cryptos[crypto as CryptoName].price * 0.1;
  const getVolume = (crypto: string) => cryptos[crypto as CryptoName].volume;

  return (
    <>
      {game.wallet.map((crypto) => (
        <DialsComponent key={crypto.name}>
          <DialComponent
            value={crypto.quantity}
            label={`${crypto.name}`}
            notation="compact"
          />
          <div className={styles.buttons}>
            <ClickerComponent
              className={styles.button}
              aria-label="Decrease"
              value={0.1}
              prefix="-"
              suffix={crypto.name}
              disabled={crypto.quantity <= 0}
              onClick={() => decreaseWallet(crypto.name, getPrice(crypto.name))}
              // onClick={() => decreaseWallet(crypto.name, cryptos[crypto.name as CryptoName].price * 0.1)}
            >
              -
            </ClickerComponent>
            <ClickerComponent
              className={styles.button}
              aria-label="Increase"
              value={0.1}
              prefix="+"
              suffix={crypto.name}
              disabled={
                // game.cash <= cryptos[crypto.name as CryptoName].price * 0.1 ||
                game.cash <= getPrice(crypto.name) || getVolume(crypto.name) <= 0
                // cryptos[crypto.name as CryptoName].volume <= 0
              }
              onClick={() => increaseWallet(crypto.name, getPrice(crypto.name))}
              // onClick={() => increaseWallet(crypto.name, cryptos[crypto.name as CryptoName].price * 0.1)}
            >
              +
            </ClickerComponent>
          </div>
        </DialsComponent>
      ))}
    </>
  );
};
