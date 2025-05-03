// import { Fragment } from 'react';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useExchange } from '@/src/pages/game/components/dashboard/investments/exchange/useExchange.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { CryptoSymbol } from '@/src/pages/game/components/dashboard/investments/crypto/Crypto.type.ts';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const WalletComponent = () => {
  const setGame = useGameDispatch();
  const game = useGame();
  const { cryptos } = useExchange();

  // const cryptoEnables = game.wallet.filter((crypto) => crypto.quantity > 0).length;

  const decreaseWallet = (symbol: string, price: number) => setGame({ type: 'DECREASE_WALLET', symbol, price });
  const increaseWallet = (symbol: string, price: number) => setGame({ type: 'INCREASE_WALLET', symbol, price });

  const getPrice = (symbol: string) => cryptos[symbol as CryptoSymbol].price * 0.1;
  const getVolume = (symbol: string) => cryptos[symbol as CryptoSymbol].volume;

  return (
    <DialsComponent direction="row">
      {game.wallet.map((crypto) => (
        <DialsComponent key={crypto.symbol}>
          <DialComponent
            value={crypto.quantity}
            label={`${crypto.symbol}`}
            notation="compact"
          />
          <div className={styles.buttons}>
            <ClickerComponent
              className={styles.button}
              aria-label="Decrease"
              value={0.1}
              prefix="-"
              suffix={crypto.symbol}
              disabled={crypto.quantity <= 0}
              onClick={() => decreaseWallet(crypto.symbol, getPrice(crypto.symbol))}
              // onClick={() => decreaseWallet(crypto.name, cryptos[crypto.name as CryptoName].price * 0.1)}
            >
              -
            </ClickerComponent>
            <ClickerComponent
              className={styles.button}
              aria-label="Increase"
              value={0.1}
              prefix="+"
              suffix={crypto.symbol}
              disabled={
                // game.cash <= cryptos[crypto.name as CryptoName].price * 0.1 ||
                game.cash <= getPrice(crypto.symbol) || getVolume(crypto.symbol) <= 0
                // cryptos[crypto.name as CryptoName].volume <= 0
              }
              onClick={() => increaseWallet(crypto.symbol, getPrice(crypto.symbol))}
              // onClick={() => increaseWallet(crypto.name, cryptos[crypto.name as CryptoName].price * 0.1)}
            >
              +
            </ClickerComponent>
          </div>
        </DialsComponent>
      ))}
    </DialsComponent>
  );
};
