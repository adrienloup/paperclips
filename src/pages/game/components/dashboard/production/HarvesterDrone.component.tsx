import { useTranslation } from 'react-i18next';
// import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useGame } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dials/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import styles from '@/src/generic/common/components/cards/card/Card.module.scss';

export const HarvesterDroneComponent = () => {
  const { t } = useTranslation();
  // const setGame = useGameDispatch();
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.harvesterDroneCost}
        style="currency"
        notation="compact"
        label={t('game.harvesterDroneCost')}
      />
      <DialComponent
        value={game.harvesterDrone}
        notation="compact"
        label={t('game.harvesterDrone')}
      />
      <ClickerComponent
        className={styles.button}
        value={1}
        prefix="+"
        suffix="Drone"
        disabled={game.funds < game.harvesterDroneCost}
        onClick={() => console.log('clicked')}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
