import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { ProgressbarComponent } from '@/src/generic/common/components/progressbar/Progressbar.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ProcessorComponent = () => {
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.processor}
        valueMax={80}
        notation="compact"
        label="Processors"
      />
      <ProgressbarComponent
        className={styles.progressbar}
        valueNow={game.processor}
        valueMax={80}
      />
      <ClickerComponent
        className={styles.button}
        disabled={game.trust <= game.memory + game.processor || game.processor >= 80}
        aria-label="Increase processor"
        value={1}
        onClick={() => setGame({ type: 'INCREASE_PROCESSOR' })}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
