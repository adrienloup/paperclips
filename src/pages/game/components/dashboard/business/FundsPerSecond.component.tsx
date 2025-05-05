import { useCallback, useEffect } from 'react';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dials/dial/Dial.component.tsx';

export const FundsPerSecondComponent = () => {
  const game = useGame();
  const setGame = useGameDispatch();
  const setAlerts = useAlertsDispatch();

  const enabledFundsPerSecond = useCallback(() => {
    const revTracker = game.projects.find((project) => project.id === 'revTracker');
    if (revTracker?.unlocked && !revTracker?.enabled && !game.feature.fundsPerSecond) {
      setGame({ type: 'UPDATE_FEATURE', feature: 'fundsPerSecond', value: true });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'fundsPerSecond', text: 'fundsPerSecond alert' } });
    }
  }, [game.projects, game.feature.fundsPerSecond]);

  useEffect(() => {
    enabledFundsPerSecond();
  }, [enabledFundsPerSecond]);

  if (!game.feature.fundsPerSecond) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={game.fundsPerSecond}
        style="currency"
        notation="compact"
        label="funds per second"
      />
    </DialsComponent>
  );
};
