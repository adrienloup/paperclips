import { useGame } from '@/src/pages/game/useGame.ts';

export const ManufacturingComponent = () => {
  console.log('ManufacturingComponent');
  const game = useGame();

  return <>Manufacturing {game.clipsPerSecond}</>;
};
