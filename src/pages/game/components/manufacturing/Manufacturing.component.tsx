// import { useCallback } from 'react';
// import { useInterval } from '@/src/generic/hooks/useInterval.ts';
// import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useGame } from '@/src/pages/game/useGame.ts';

export const ManufacturingComponent = () => {
  console.log('ManufacturingComponent');
  //const setGame = useGameDispatch();
  const game = useGame();

  // const updatePerSecond = useCallback(() => {
  //   console.log('updatePerSecond');
  //   setGame({ type: 'UPDATE_PER_SECOND' });
  // }, []);
  //
  // useInterval(updatePerSecond, 1e3);

  return (
    <>
      Manufacturing
      <br />
      {game.clipsPerSecond}
    </>
  );
};
