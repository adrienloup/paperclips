import { ChangeEvent, useState } from 'react';
import { useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import styles from '@/src/generic/common/components/cards/card/Card.module.scss';

export const SwarmComputingComponent = () => {
  const setGame = useGameDispatch();
  const [value, setValue] = useState<number>(5);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const think = Number(e.target.value);
    const work = 10 - think;
    setGame({ type: 'UPDATE_SWARM_STATUS', think, work });
    setValue(think);
  };

  return (
    <DialsComponent>
      <div className={styles.subtitle}>Swarm Computing</div>
      <div className={styles.range}>
        <span>Work</span>
        <input
          type="range"
          min={0}
          max={10}
          value={value}
          onChange={handleChange}
        />
        <span>Think</span>
      </div>
    </DialsComponent>
  );
};
