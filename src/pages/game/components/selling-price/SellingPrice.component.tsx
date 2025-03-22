import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const SellingPriceComponent = () => {
  //console.log('PublicDemandComponent');
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <GroupComponent>
      {game.marketing > 1 && <BonusComponent value={game.marketing} />}
      {/*{game.sellingPriceRef.toFixed(2)}*/}
      <DialComponent
        value={game.sellingPrice}
        style="currency"
        label={t('game.sellingPrice')}
      />
      <DialComponent
        value={game.publicDemand}
        style="percent"
        label={t('game.publicDemand')}
      />
      <ButtonComponent
        className={styles.button}
        disabled={game.sellingPriceRef === 1}
        aria-label="Increase selling price"
        onClick={() => setGame({ type: 'INCREASE_SELLING_PRICE' })}
      >
        <IconComponent
          className={styles.icon}
          icon="add_circle"
        />
      </ButtonComponent>
      <ButtonComponent
        className={styles.button}
        disabled={game.sellingPriceRef === 0.1}
        aria-label="Decrease selling price"
        onClick={() => setGame({ type: 'DECREASE_SELLING_PRICE' })}
      >
        <IconComponent
          className={styles.icon}
          icon="do_not_disturb_on"
        />
      </ButtonComponent>
    </GroupComponent>
  );
};
