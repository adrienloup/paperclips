import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useInterval } from '@/src/generic/hooks/useInterval.ts';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dials/dial/Dial.component.tsx';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component.tsx';

export const UnsoldInventoryComponent = () => {
  const { t } = useTranslation();
  const game = useGame();
  const setGame = useGameDispatch();

  const sellUnsoldInventory = useCallback(() => {
    setGame({ type: 'SELL_UNSOLD_INVENTORY' });
  }, []);

  useInterval(sellUnsoldInventory, 5e2);

  return (
    <DialsComponent>
      <DialComponent
        value={game.unsoldInventory}
        notation="compact"
        label={t('game.unsoldInventory')}
        bonus={
          game.unsoldInventoryBonus > 1 ? (
            <BonusComponent
              value={game.unsoldInventoryBonus}
              prefix="x"
            />
          ) : null
        }
      />
    </DialsComponent>
  );
};
