import { useGame } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ProgressbarComponent } from '@/src/generic/common/components/progressbar/Progressbar.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const OperationComponent = () => {
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.operation}
        valueMax={game.operationMax}
        label="Operations"
        notation="compact"
      />
      <ProgressbarComponent
        className={styles.progressbar}
        valueNow={game.operation}
        valueMax={game.operationMax}
      />
    </DialsComponent>
  );
};
