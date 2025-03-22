import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';

export const MarketingComponent = () => {
  //console.log('MarketingComponent');
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <GroupComponent>
      <DialComponent
        value={game.marketingCost}
        style="currency"
        label={t('game.marketingCost')}
        disabled={game.marketing >= 10}
      />
      <DialComponent
        value={game.marketing}
        label={t('game.marketing')}
        limit={10}
      />
      <ButtonComponent
        className={styles.button}
        disabled={game.funds < game.marketingCost || game.marketing >= 10}
        aria-label="Increase marketing"
        onClick={() => setGame({ type: 'BUY_MARKETING' })}
      >
        <IconComponent
          className={styles.icon}
          icon="add_circle"
        />
      </ButtonComponent>
    </GroupComponent>
  );
};
