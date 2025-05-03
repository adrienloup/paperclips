import { useGame } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ProgressbarComponent } from '@/src/generic/common/components/progressbar/Progressbar.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const TrustComponent = () => {
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.trust}
        valueMax={100}
        label="Trust"
      />
      <ProgressbarComponent
        className={styles.progressbar}
        valueNow={game.trust}
      />
    </DialsComponent>
  );
};
