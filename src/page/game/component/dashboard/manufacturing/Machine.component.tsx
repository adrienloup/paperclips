import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/page/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/component/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/component/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/component/clicker/Clicker.component.tsx';
import styles from '@/src/generic/common/component/card/Card.module.scss';

export const MachineComponent = () => {
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.machine}
        notation="compact"
        label={t('game.machine')}
      />
      <ClickerComponent
        className={styles.button}
        disabled={game.funds < game.machineCost}
        onClick={() => setGame({ type: 'BUY_MACHINE' })}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
