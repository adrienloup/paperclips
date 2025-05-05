import { useGame } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dials/dial/Dial.component.tsx';

export const GiftsComponent = () => {
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.gifts}
        valueMax={100}
        label="Gifts"
      />
    </DialsComponent>
  );
};
