import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import styles from '@/src/pages/game/components/dashboard/paperclips/Paperclips.module.scss';

export const PaperclipsComponent = () => {
  const setGame = useGameDispatch();
  const game = useGame();

  const paperclipsClick = () => setGame({ type: 'UPDATE_PAPERCLIPS' });

  return (
    <div className={styles.paperclips}>
      <div className={styles.inner}>
        <TitleComponent
          tag="h1"
          className={styles.title}
        >
          <NumberComponent
            className={styles.number}
            value={game.paperclips}
          />
          <div className={styles.label}>Total of paperclips</div>
        </TitleComponent>
        <ClickerComponent
          className={styles.button}
          disabled={game.wire <= 0}
          value={1}
          onClick={paperclipsClick}
        >
          +1
        </ClickerComponent>
      </div>
    </div>
  );
};
