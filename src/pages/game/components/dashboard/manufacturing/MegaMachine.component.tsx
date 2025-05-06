import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dials/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import styles from '@/src/generic/common/components/cards/card/Card.module.scss';

export const MegaMachineComponent = () => {
  const { t } = useTranslation();
  const game = useGame();
  const setGame = useGameDispatch();
  const setAlerts = useAlertsDispatch();

  const buyMegaMachine = () => {
    const cost = game.megaMachineCost + 11e2;
    setGame({ type: 'BUY_MEGAMACHINE', cost });
  };

  const enableMegaMachine = useCallback(() => {
    if (game.machine >= 75 && !game.feature.factory && !game.feature.megaMachine) {
      setGame({ type: 'UPDATE_FEATURE', feature: 'megaMachine', value: true });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'megaMachine', text: 'megaMachine alert' } });
    }
  }, [game.machine, game.feature.factory, game.feature.megaMachine]);

  useEffect(() => {
    enableMegaMachine();
  }, [enableMegaMachine]);

  if (!game.feature.megaMachine) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={game.megaMachineCost}
        style="currency"
        notation="compact"
        label={t('game.megaMachineCost')}
      />
      <DialComponent
        value={game.megaMachine}
        notation="compact"
        label={t('game.megaMachine')}
      />
      <ClickerComponent
        className={styles.button}
        value={1}
        prefix="+"
        suffix="megamachine"
        disabled={game.funds < game.megaMachineCost || game.wire <= 0}
        onClick={buyMegaMachine}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
