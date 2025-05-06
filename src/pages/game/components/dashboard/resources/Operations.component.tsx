import { useGame } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dials/dial/Dial.component.tsx';

export const OperationsComponent = () => {
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.operations}
        valueMax={game.operationsMax}
        label="Operations"
        notation="compact"
      />
    </DialsComponent>
  );
};
