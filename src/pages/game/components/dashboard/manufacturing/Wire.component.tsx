import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component.tsx';

export const WireComponent = () => {
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.wire}
        notation="compact"
        label={t('game.wire')}
        bonus={<BonusComponent value={game.wireBonus} />}
      />
      <ClickerComponent
        className={styles.button}
        disabled={game.funds < game.wireCost}
        value={game.wireBonus}
        onClick={() => setGame({ type: 'BUY_WIRE' })}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
