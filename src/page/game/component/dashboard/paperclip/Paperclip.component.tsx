import { useGame } from '@/src/page/game/useGame.ts';
import { TitleComponent } from '@/src/generic/common/component/title/Title.component.tsx';
import { NumberComponent } from '@/src/generic/common/component/number/Number.component.tsx';
import styles from '@/src/page/game/component/dashboard/paperclip/Paperclip.module.scss';

export const PaperclipComponent = () => {
  const game = useGame();

  return (
    <TitleComponent
      tag="h1"
      className={styles.paperclip}
    >
      <NumberComponent
        value={game.paperclip}
        notation="compact"
      />
      Paperclips
    </TitleComponent>
  );
};
