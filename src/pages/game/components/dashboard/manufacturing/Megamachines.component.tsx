import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const MegamachinesComponent = () => {
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.megamachines}
        notation="compact"
        label={t('game.megamachines')}
      />
      <ClickerComponent
        className={styles.button}
        disabled={game.funds < game.megamachinesCost}
        onClick={() => setGame({ type: 'BUY_MEGAMACHINES' })}
      >
        <IconComponent
          className={styles.icon}
          icon="add_circle"
        />
      </ClickerComponent>
    </DialsComponent>
  );
};
