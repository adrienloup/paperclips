import { useGame } from '@/src/page/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/component/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/component/dial/Dial.component.tsx';

export const CreativityComponent = () => {
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.creativity}
        notation="compact"
        label="Creativity"
      />
    </DialsComponent>
  );
};
