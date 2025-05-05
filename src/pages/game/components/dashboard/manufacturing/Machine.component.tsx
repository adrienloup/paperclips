import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useNoticesDispatch } from '@/src/pages/game/components/dashboard/notices/useNotices.ts';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dials/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component.tsx';
import styles from '@/src/generic/common/components/cards/card/Card.module.scss';

export const MachineComponent = () => {
  const { t } = useTranslation();
  const game = useGame();
  const setGame = useGameDispatch();
  const setNotices = useNoticesDispatch();
  const setAlerts = useAlertsDispatch();

  const buyMachine = () => {
    const cost = game.machineCost + (Math.random() * 10 + 10); // 10 et 20
    setGame({ type: 'BUY_MACHINE', cost });
  };

  const update = useCallback(() => {
    if (game.funds >= 5 && !game.feature.machine) {
      setGame({ type: 'UPDATE_FEATURE', feature: 'machine', value: true });
      setNotices({ type: 'ENABLE_NOTICE', id: 'machine' });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'machine', text: 'machine alert' } });
    }
  }, [game.funds, game.feature.machine]);

  useEffect(() => {
    update();
  }, [update]);

  if (!game.feature.machine) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={game.machineCost}
        style="currency"
        notation="compact"
        label={t('game.machineCost')}
      />
      <DialComponent
        value={game.machine}
        notation="compact"
        label={t('game.machine')}
        bonus={
          game.machineBonus > 1 ? (
            <BonusComponent
              value={game.machineBonus}
              prefix="x"
            />
          ) : null
        }
      />
      <ClickerComponent
        className={styles.button}
        value={1}
        prefix="+"
        suffix="machine"
        disabled={game.funds < game.machineCost || game.wire <= 0}
        onClick={buyMachine}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
