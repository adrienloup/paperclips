import { useGame } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const OperationsComponent = () => {
  //console.log('OperationsComponent');
  const game = useGame();

  return (
    <GroupComponent>
      <DialComponent
        value={game.operations}
        label="Operations"
        notation="compact"
        limit={game.operationsLimit}
      />
    </GroupComponent>
  );
};
