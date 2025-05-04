import { useCallback, useEffect } from 'react';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useNoticesDispatch } from '@/src/pages/game/components/dashboard/notices/useNotices.ts';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { ExchangeComponent } from '@/src/pages/game/components/dashboard/investments/exchange/Exchange.component.tsx';
import { CashComponent } from '@/src/pages/game/components/dashboard/investments/Cash.component.tsx';
import { WalletComponent } from '@/src/pages/game/components/dashboard/investments/Wallet.component.tsx';
import { EmptyComponent } from '@/src/generic/common/components/empty/Empty.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const InvestmentsComponent = () => {
  const game = useGame();
  const setGame = useGameDispatch();
  const setNotices = useNoticesDispatch();
  const setAlerts = useAlertsDispatch();

  const update = useCallback(() => {
    const algorithmicTrading = game.projects.find((project) => project.id === 'algorithmicTrading');
    if (algorithmicTrading?.unlocked && !algorithmicTrading?.enabled && !game.feature.investments) {
      setGame({ type: 'UPDATE_FEATURE', feature: 'investments', value: true });
      setNotices({ type: 'ENABLE_NOTICE', id: 'investments' });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'investments', text: 'investments alert' } });
    }
  }, [game.projects, game.feature.investments]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <CardComponent className={styles.investments}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Investments
      </TitleComponent>
      {game.feature.investments ? (
        <>
          <ExchangeComponent />
          <CashComponent />
          <WalletComponent />
        </>
      ) : (
        <EmptyComponent empty="game.empty.investments" />
      )}
    </CardComponent>
  );
};
