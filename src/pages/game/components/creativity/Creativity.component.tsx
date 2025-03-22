import { useGame } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const CreativityComponent = () => {
  //console.log('CreativityComponent');
  const game = useGame();

  return (
    <GroupComponent>
      <DialComponent
        value={game.creativity}
        notation="compact"
        label="Creativity"
      />
    </GroupComponent>
  );
};
