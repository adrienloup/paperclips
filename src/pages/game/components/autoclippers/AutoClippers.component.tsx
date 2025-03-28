import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const AutoClippersComponent = () => {
  //console.log('AutoClippersComponent');
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <GroupComponent>
      <DialComponent
        value={game.autoClippers}
        notation="compact"
        label={t('game.autoClippers')}
      />
      <DialComponent
        value={game.autoClippersCost}
        style="currency"
        notation="compact"
        label={t('game.autoClippersCost')}
      />
      <ButtonComponent
        className={styles.button}
        disabled={game.funds < game.autoClippersCost}
        onClick={() => setGame({ type: 'BUY_AUTOCLIPPERS' })}
      >
        Buy
        <span>1</span>
      </ButtonComponent>
    </GroupComponent>
  );
};
