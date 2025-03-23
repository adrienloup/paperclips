import { useGame } from '@/src/pages/game/useGame.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import styles from '@/src/pages/game/components/clips/Clips.module.scss';

export const ClipsComponent = ({ active }: { active?: boolean }) => {
  const game = useGame();

  return (
    <TitleComponent
      tag={'h1'}
      className={classNames([styles.clips, active ? styles.active : ''])}
    >
      <NumberComponent
        value={game.clips}
        notation={active ? 'compact' : undefined}
      />
    </TitleComponent>
  );
};
