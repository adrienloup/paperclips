import { useEffect } from 'react';
import { useGame, useGameDispatch } from '../../useGame';
import { useAlertDispatch } from '../../../generic/components/alert/useAlert';

export const FeaturesComponent = () => {
  const game = useGame();
  const setGame = useGameDispatch();
  const setAlerts = useAlertDispatch();

  // Débloquer des fonctionnalités
  useEffect(() => {
    setGame({
      ...game,
      feature: {
        autoClippers: game.paperclips >= 100,
        marketing: game.paperclips >= 500,
        trust: game.paperclips >= 2000,
      },
    });
  }, [game.paperclips]);

  useEffect(() => {
    if (game.steelWire < game.autoClippers) {
      setAlerts({
        type: 'added',
        label: '@TODO1',
        id: 'tutu',
        duration: 1e4,
      });
    }
  }, [game.steelWire, game.autoClippers]);

  return null;
};
