import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const WireComponent = () => {
  //console.log('WireComponent');
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <GroupComponent>
      <DialComponent
        value={game.wireStock}
        notation="compact"
        label={t('game.wireStock')}
      />
      <DialComponent
        value={game.wireCost}
        style="currency"
        label={t('game.wireCost')}
      />
      <ButtonComponent
        className={styles.button}
        disabled={game.funds < game.wireCost}
        onClick={() => setGame({ type: 'BUY_WIRE' })}
      >
        Buy
        <NumberComponent
          value={game.wire}
          notation="compact"
        />
      </ButtonComponent>
    </GroupComponent>
  );
};
