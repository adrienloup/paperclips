import { useCallback, useEffect } from 'react';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const TrustComponent = () => {
  //console.log('FeaturesComponent');
  const game = useGame();
  const setGame = useGameDispatch();

  const update = useCallback(() => {
    if (game.clips >= 3e3 && game.trustCost < 5e3) setGame({ type: 'UPDATE_TRUST', value: 1 });
  }, [game.clips]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <GroupComponent>
      <DialComponent
        value={game.trustCost}
        notation="compact"
        label="Trust cost in clips"
        disabled={game.trust >= 100}
      />
      <DialComponent
        value={game.trust}
        label="Trust"
        limit={100}
      />
    </GroupComponent>
  );
};
