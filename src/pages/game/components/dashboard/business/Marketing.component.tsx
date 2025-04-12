import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const MarketingComponent = () => {
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  const marketingClick = () => setGame({ type: 'BUY_MARKETING' });

  return (
    <DialsComponent>
      {/*<DialComponent
        value={game.marketingCost}
        style="currency"
        label={t('game.marketingCost')}
        disabled={game.marketing >= 10}
      />*/}
      <DialComponent
        value={game.marketing}
        label={t('game.marketing')}
        limit={10}
      />
      <ClickerComponent
        className={styles.button}
        disabled={game.funds < game.marketingCost || game.marketing >= 10}
        aria-label="Increase marketing"
        onClick={marketingClick}
      >
        <IconComponent
          className={styles.icon}
          icon="add_circle"
        />
      </ClickerComponent>
    </DialsComponent>
  );
};
