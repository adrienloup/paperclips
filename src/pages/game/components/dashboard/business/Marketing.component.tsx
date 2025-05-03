import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useNoticesDispatch } from '@/src/pages/game/components/dashboard/notices/useNotices.ts';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { ProgressbarComponent } from '@/src/generic/common/components/progressbar/Progressbar.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const MarketingComponent = () => {
  const { t } = useTranslation();
  const game = useGame();
  const setGame = useGameDispatch();
  const setNotices = useNoticesDispatch();
  const setAlerts = useAlertsDispatch();

  useEffect(() => {
    if (game.funds >= 200 && !game.feature.marketing) {
      setGame({ type: 'UPDATE_FEATURE', feature: 'marketing', value: true });
      setNotices({ type: 'ENABLE_NOTICE', id: 'marketing' });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'marketing', text: 'marketing alert' } });
    }
  }, [game.funds, game.feature.marketing]);

  if (!game.feature.marketing) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={game.marketingCost}
        style="currency"
        label={t('game.marketingCost')}
        disabled={game.marketing >= 10}
      />
      <DialComponent
        value={game.marketing}
        valueMax={10}
        label={t('game.marketing')}
      />
      <ProgressbarComponent
        className={styles.progressbar}
        valueNow={game.marketing}
        valueMax={10}
      />
      <ClickerComponent
        className={styles.button}
        aria-label="Increase marketing"
        prefix="+"
        suffix={t('game.marketing')}
        disabled={game.funds < game.marketingCost || game.marketing >= 10}
        onClick={() => setGame({ type: 'BUY_MARKETING' })}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
