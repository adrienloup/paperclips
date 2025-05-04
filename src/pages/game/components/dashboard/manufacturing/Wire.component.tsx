import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInterval } from '@/src/generic/hooks/useInterval.ts';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const WireComponent = () => {
  const { t } = useTranslation();
  const game = useGame();
  const setGame = useGameDispatch();

  const buyWire = () => {
    const cost = game.wireCost + (Math.random() * (1.25 - 0.25) + 0.25); // 0.25 et 1.25
    setGame({ type: 'BUY_WIRE', cost });
  };

  const updateWireBonus = useCallback(() => {
    const begForMoreWire = game.projects.find((project) => project.id === 'begForMoreWire');
    if (begForMoreWire?.unlocked && !begForMoreWire?.enabled) {
      setGame({ type: 'UPDATE_WIRE_BONUS', value: 1e3 });
    }
  }, [game.projects]);

  const updateWireCost = useCallback(() => {
    const cost = game.wireCost > 8 ? game.wireCost - 0.25 : Math.random() * 8 + 12; // 0 et 1, 0 et 8, 12 et 20
    setGame({ type: 'UPDATE_WIRE_COST', cost });
  }, [game.wireCost]);

  useEffect(() => {
    updateWireBonus();
  }, [updateWireBonus]);

  useInterval(updateWireCost, 1e4);

  if (!game.feature.wire) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={game.wireCost}
        style="currency"
        notation="compact"
        label={t('game.wireCost')}
      />
      <DialComponent
        value={game.wire}
        notation="compact"
        label={t('game.wire')}
        bonus={
          <BonusComponent
            value={game.wireBonus}
            prefix="+"
          />
        }
      />
      <ClickerComponent
        className={styles.button}
        value={game.wireBonus}
        prefix="+"
        suffix="wire"
        disabled={game.funds < game.wireCost}
        onClick={buyWire}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
