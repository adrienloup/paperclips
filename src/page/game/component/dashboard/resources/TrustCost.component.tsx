import { useGame } from '@/src/page/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/component/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/component/dial/Dial.component.tsx';

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
