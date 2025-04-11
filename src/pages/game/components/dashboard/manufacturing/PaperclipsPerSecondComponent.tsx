import { useGame } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const PaperclipsPerSecondComponent = () => {
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.paperclipsPerSecond}
        notation="compact"
        label="Paperclips per second"
      />
    </DialsComponent>
  );
};
