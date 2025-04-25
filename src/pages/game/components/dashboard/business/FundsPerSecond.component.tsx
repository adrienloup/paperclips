import { useGame } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const FundsPerSecondComponent = () => {
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.fundsPerSecond}
        style="currency"
        notation="compact"
        label="funds per second"
      />
    </DialsComponent>
  );
};
