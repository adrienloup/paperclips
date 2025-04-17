import { useGame } from '@/src/page/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/component/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/component/dial/Dial.component.tsx';

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
