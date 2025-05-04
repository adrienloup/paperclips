import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const CashComponent = () => {
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.cash}
        style="currency"
        notation="compact"
        label="Cash"
      />
      <div className={styles.buttons}>
        <ClickerComponent
          className={styles.button}
          aria-label="Decrease cash"
          value={1}
          prefix="-"
          suffix="cash"
          disabled={game.cash <= 0}
          onClick={() => setGame({ type: 'DECREASE_CASH' })}
        >
          -
        </ClickerComponent>
        <ClickerComponent
          className={styles.button}
          aria-label="Increase cash"
          value={1}
          prefix="+"
          suffix="cash"
          disabled={game.funds < 10}
          onClick={() => setGame({ type: 'INCREASE_CASH' })}
        >
          +
        </ClickerComponent>
      </div>
    </DialsComponent>
  );
};
