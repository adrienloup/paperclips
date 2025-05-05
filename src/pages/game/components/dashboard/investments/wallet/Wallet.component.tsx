import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useExchange } from '@/src/pages/game/components/dashboard/investments/exchange/useExchange.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dials/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { TokenSymbol } from '@/src/pages/game/components/dashboard/investments/token/Token.type.ts';
import styles from '@/src/generic/common/components/cards/card/Card.module.scss';

export const WalletComponent = () => {
  const game = useGame();
  const setGame = useGameDispatch();
  const { tokens } = useExchange();
  // const tokenEnables = game.wallet.filter((token) => token.quantity > 0).length;

  const decreaseWallet = (symbol: string, price: number) => setGame({ type: 'DECREASE_WALLET', symbol, price });
  const increaseWallet = (symbol: string, price: number) => setGame({ type: 'INCREASE_WALLET', symbol, price });

  const getPrice = (symbol: string) => tokens[symbol as TokenSymbol].price * 0.1;
  const getVolume = (symbol: string) => tokens[symbol as TokenSymbol].volume;

  return (
    <DialsComponent direction="row">
      {Object.entries(game.wallet).map(([symbol, token]) => (
        <DialsComponent key={symbol}>
          <DialComponent
            value={token.quantity}
            label={`${symbol}`}
            notation="compact"
          />
          <div className={styles.buttons}>
            <ClickerComponent
              className={styles.button}
              aria-label="Decrease"
              value={0.1}
              prefix="-"
              suffix={symbol}
              disabled={token.quantity <= 0}
              onClick={() => decreaseWallet(symbol, getPrice(symbol))}
            >
              -
            </ClickerComponent>
            <ClickerComponent
              className={styles.button}
              aria-label="Increase"
              value={0.1}
              prefix="+"
              suffix={symbol}
              disabled={game.cash <= getPrice(symbol) || getVolume(symbol) <= 0}
              onClick={() => increaseWallet(symbol, getPrice(symbol))}
            >
              +
            </ClickerComponent>
          </div>
        </DialsComponent>
      ))}
    </DialsComponent>
  );
};
