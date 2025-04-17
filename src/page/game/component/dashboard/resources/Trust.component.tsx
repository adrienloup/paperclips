// import { useCallback, useEffect } from 'react';
// import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useGame } from '@/src/page/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/component/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/component/dial/Dial.component.tsx';
import { ProgressbarComponent } from '@/src/generic/common/component/progressbar/Progressbar.component.tsx';
import styles from '@/src/generic/common/component/card/Card.module.scss';

export const TrustComponent = () => {
  const game = useGame();
  // const setGame = useGameDispatch();

  // const update = useCallback(() => {
  //   if (game.paperclip >= 3e3 && game.trustCost < 5e3) {
  //     setGame({ type: 'UPDATE_TRUST', value: 1 });
  //   }
  // }, [game.paperclip]);
  //
  // useEffect(() => {
  //   update();
  // }, [update]);

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
