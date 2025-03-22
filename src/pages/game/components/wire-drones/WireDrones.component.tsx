import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const WireDronesComponent = () => {
  //console.log('WireDronesComponent');
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <GroupComponent>
      <DialComponent
        value={game.wireDrones}
        notation="compact"
        label="Wire drones"
      />
      <DialComponent
        value={game.wireDronesCost}
        style="currency"
        notation="compact"
        label="Wire drone cost"
      />
      <ButtonComponent
        className={styles.button}
        disabled={game.funds < game.wireDronesCost}
        onClick={() => setGame({ type: 'BUY_WIRE_DRONES' })}
      >
        Buy
        <NumberComponent
          value={game.drones}
          notation="compact"
        />
      </ButtonComponent>
    </GroupComponent>
  );
};
