import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { ProgressbarComponent } from '@/src/generic/common/components/progressbar/Progressbar.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const MarketingComponent = () => {
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.marketing}
        valueMax={10}
        label={t('game.marketing')}
      />
      <ProgressbarComponent
        className={styles.progressbar}
        valueNow={game.marketing}
        valueMax={10}
      />
      <ClickerComponent
        className={styles.button}
        disabled={game.funds < game.marketingCost || game.marketing >= 10}
        aria-label="Increase marketing"
        onClick={() => setGame({ type: 'BUY_MARKETING' })}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
