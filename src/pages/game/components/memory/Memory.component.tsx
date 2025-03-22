import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const MemoryComponent = () => {
  //console.log('MemoryComponent');
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <GroupComponent>
      <DialComponent
        value={game.memory}
        notation="compact"
        label="Memory"
      />
      <ButtonComponent
        className={styles.button}
        disabled={game.trust <= game.memory + game.processors || game.memory >= 20}
        aria-label="Increase memory"
        onClick={() => setGame({ type: 'INCREASE_MEMORY' })}
      >
        <IconComponent
          className={styles.icon}
          icon="add_circle"
        />
      </ButtonComponent>
    </GroupComponent>
  );
};
