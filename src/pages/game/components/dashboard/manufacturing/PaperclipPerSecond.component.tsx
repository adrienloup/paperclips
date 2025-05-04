import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useCallback, useEffect } from 'react';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const PaperclipPerSecondComponent = () => {
  const game = useGame();
  const setGame = useGameDispatch();
  const setAlerts = useAlertsDispatch();

  const enabledPaperclipPerSecond = useCallback(() => {
    const revTracker = game.projects.find((project) => project.id === 'revTracker');
    if (revTracker?.unlocked && !revTracker?.enabled && !game.feature.paperclipPerSecond) {
      setGame({ type: 'UPDATE_FEATURE', feature: 'paperclipPerSecond', value: true });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'paperclipPerSecond', text: 'paperclipPerSecond alert' } });
    }
  }, [game.projects, game.feature.paperclipPerSecond]);

  useEffect(() => {
    enabledPaperclipPerSecond();
  }, [enabledPaperclipPerSecond]);

  if (!game.feature.paperclipPerSecond) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={game.paperclipPerSecond}
        notation="compact"
        label="Paperclips per second"
      />
    </DialsComponent>
  );
};
