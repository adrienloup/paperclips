import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useNoticesDispatch } from '@/src/pages/game/components/dashboard/notices/useNotices.ts';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const FactoryComponent = () => {
  const { t } = useTranslation();
  const game = useGame();
  const setGame = useGameDispatch();
  const setNotices = useNoticesDispatch();
  const setAlerts = useAlertsDispatch();

  const buyFactory = () => {
    const cost = game.factoryCost + (Math.random() * 5e5 + 5e5); // 5e5 et 1e6
    setGame({ type: 'BUY_FACTORY', cost });
  };

  useEffect(() => {
    if (game.operation >= 35e3 && !game.feature.factory) {
      setGame({ type: 'UPDATE_FEATURE', feature: 'machine', value: false });
      setGame({ type: 'UPDATE_FEATURE', feature: 'megaMachine', value: false });
      setGame({ type: 'UPDATE_FEATURE', feature: 'factory', value: true });
      setNotices({ type: 'ENABLE_NOTICE', id: 'factory' });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'factory', text: 'factory alert' } });
    }
  }, [game.operation, game.feature.factory]);

  if (!game.feature.factory) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={game.factoryCost}
        notation="compact"
        label={t('game.factoryCost')}
      />
      <DialComponent
        value={game.factory}
        notation="compact"
        label={t('game.factory')}
      />
      <ClickerComponent
        className={styles.button}
        value={1}
        prefix="+"
        suffix="factory"
        disabled={game.paperclip < game.factoryCost}
        onClick={buyFactory}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
