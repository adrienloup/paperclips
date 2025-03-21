import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const MegaClippersComponent = () => {
  //console.log('MegaClippersComponent');
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <GroupComponent>
      <DialComponent
        value={game.megaClippers}
        notation="compact"
        label={t('game.megaClippers')}
      />
      <DialComponent
        value={game.megaClippersCost}
        style="currency"
        notation="compact"
        label={t('game.megaClippersCost')}
      />
      <ButtonComponent
        className={styles.button}
        disabled={game.funds < game.megaClippersCost}
        onClick={() => setGame({ type: 'BUY_MEGACLIPPERS' })}
      >
        Buy
        <span>1</span>
      </ButtonComponent>
    </GroupComponent>
  );
};
