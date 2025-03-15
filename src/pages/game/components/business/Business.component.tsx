import { useGame } from '@/src/pages/game/useGame.ts';

export const BusinessComponent = () => {
  //console.log('BusinessComponent');
  const game = useGame();

  return <>Business {game.clipsPerSecond}</>;
};
