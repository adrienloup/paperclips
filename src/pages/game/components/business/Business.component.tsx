import { useCallback } from 'react';
import { useInterval } from '@/src/generic/hooks/useInterval.ts';
import { useGame } from '@/src/pages/game/useGame.ts';

export const BusinessComponent = () => {
  console.log('BusinessComponent');
  const game = useGame();

  const sellClips = useCallback(() => {
    console.log('sellClips');
  }, []);

  useInterval(sellClips, 5e2);

  return (
    <>
      Business
      <br />
      {game.clipsPerSecond}
    </>
  );
};
