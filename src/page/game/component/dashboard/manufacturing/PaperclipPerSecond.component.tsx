import { useGame } from '@/src/page/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/component/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/component/dial/Dial.component.tsx';

export const PaperclipPerSecondComponent = () => {
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.paperclipPerSecond}
        notation="compact"
        label="Paperclips per second"
      />
    </DialsComponent>
  );
};
