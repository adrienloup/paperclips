import { ChangeEvent, useState } from 'react';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import styles from '@/src/pages/game/components/dashboard/resources/thinking/Thinking.module.scss';

export const ThinkingComponent = () => {
  const game = useGame();
  const setGame = useGameDispatch();
  const [value, setValue] = useState<number>(game.thinking);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setGame({ type: 'UPDATE_THINKING', value: newValue });
    setValue(newValue);
  };

  return (
    <div className={styles.thinking}>
      <span>Work</span>
      <input
        type="range"
        min={0}
        max={1000}
        value={value}
        onChange={handleChange}
      />
      <span>Think</span>
    </div>
  );
};
