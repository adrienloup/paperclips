import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ClipFactoryComponent = () => {
  //console.log('ClipFactoryComponent');
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <GroupComponent>
      <DialComponent
        value={game.clipFactory}
        notation="compact"
        label="Clip factory"
      />
      <DialComponent
        value={game.clipFactoryCost}
        notation="compact"
        label="Clip factory cost"
      />
      <ButtonComponent
        className={styles.button}
        disabled={game.clips < game.clipFactoryCost}
        onClick={() => setGame({ type: 'BUY_CLIP_FACTORY' })}
      >
        Buy
        <span>1</span>
      </ButtonComponent>
    </GroupComponent>
  );
};
