import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ProduceManuallyComponent = () => {
  const game = useGame();
  const setGame = useGameDispatch();

  return (
    <DialsComponent>
      <div className={styles.text}>Make paperclip</div>
      <ClickerComponent
        className={styles.button}
        aria-label="Make paperclips"
        value={1}
        prefix="+"
        suffix="paperclip"
        disabled={game.wire <= 0}
        onClick={() => setGame({ type: 'UPDATE_PAPERCLIP' })}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
