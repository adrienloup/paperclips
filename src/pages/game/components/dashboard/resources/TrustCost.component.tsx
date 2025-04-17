import { useGame } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const TrustCostComponent = () => {
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.trustCost}
        notation="compact"
        label="Next trust"
        disabled={game.trust >= 100}
      />
    </DialsComponent>
  );
};
