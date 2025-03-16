import { useGame } from '@/src/pages/game/useGame.ts';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import styles from '@/src/pages/game/components/clips/Clips.module.scss';

export const ClipsComponent = () => {
  const game = useGame();

  return (
    <TitleComponent
      tag={'h1'}
      className={styles.clips}
    >
      <NumberComponent value={game.clips} />
    </TitleComponent>
  );
};
