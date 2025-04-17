import { useGame, useGameDispatch } from '@/src/page/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/component/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/component/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/component/clicker/Clicker.component.tsx';
import { ProgressbarComponent } from '@/src/generic/common/component/progressbar/Progressbar.component.tsx';
import styles from '@/src/generic/common/component/card/Card.module.scss';

export const MemoryComponent = () => {
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.memory}
        valueMax={20}
        notation="compact"
        label="Memory"
      />
      <ProgressbarComponent
        className={styles.progressbar}
        valueNow={game.memory}
        valueMax={20}
      />
      <ClickerComponent
        className={styles.button}
        disabled={game.trust <= game.memory + game.processor || game.memory >= 20}
        aria-label="Increase memory"
        value={1}
        onClick={() => setGame({ type: 'INCREASE_MEMORY' })}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
