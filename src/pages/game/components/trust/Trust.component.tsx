import { useGame } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const TrustComponent = () => {
  //console.log('FeaturesComponent');
  const game = useGame();

  return (
    <GroupComponent>
      <DialComponent
        value={game.trustCost}
        notation="compact"
        label="Trust cost"
        disabled={game.trust >= 10}
      />
      <DialComponent
        value={game.trust}
        label="Trust"
        limit={100}
      />
    </GroupComponent>
  );
};
