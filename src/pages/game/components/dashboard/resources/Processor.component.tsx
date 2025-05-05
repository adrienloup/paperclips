import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dials/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import styles from '@/src/generic/common/components/cards/card/Card.module.scss';

export const ProcessorComponent = () => {
  const game = useGame();
  const setGame = useGameDispatch();

  return (
    <DialsComponent>
      <DialComponent
        value={game.processor}
        valueMax={100}
        notation="compact"
        label="Processors"
      />
      <ClickerComponent
        className={styles.button}
        aria-label="Increase processor"
        value={1}
        prefix="+"
        suffix="processor"
        disabled={game.trust <= 0 || game.processor >= 100}
        onClick={() => setGame({ type: 'INCREASE_PROCESSOR' })}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
