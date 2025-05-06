import { ChangeEvent, useState } from 'react';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dials/dial/Dial.component.tsx';

export const SwarmStrategyComponent = () => {
  const game = useGame();
  const setGame = useGameDispatch();
  const [value, setValue] = useState(game.swarmStrategy);

  const think = value / 10;
  const work = 1 - value / 10;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGame({ type: 'UPDATE_SWARM_STRATEGY', value: Number(e.target.value) });
    setValue(Number(e.target.value));
  };

  if (!game.feature.swarmStrategy) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={work}
        style="percent"
        label="Work"
      />
      <DialComponent
        value={think}
        style="percent"
        label="Think"
      />
      <input
        type="range"
        min={0}
        max={10}
        step={1}
        value={value}
        onChange={handleChange}
      />
    </DialsComponent>
  );
};
