import { useEffect } from 'react';
import { useGame, useGameDispatch } from '../../useGame';

export const FeaturesComponent = () => {
  const game = useGame();
  const setGame = useGameDispatch();

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

  return null;
};
