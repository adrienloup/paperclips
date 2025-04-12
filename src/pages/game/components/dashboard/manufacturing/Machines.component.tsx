import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const MachinesComponent = () => {
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.machines}
        notation="compact"
        label={t('game.machines')}
      />
      <ClickerComponent
        className={styles.button}
        disabled={game.funds < game.machinesCost}
        onClick={() => setGame({ type: 'BUY_MACHINES' })}
      >
        <IconComponent
          className={styles.icon}
          icon="add_circle"
        />
      </ClickerComponent>
    </DialsComponent>
  );
};
