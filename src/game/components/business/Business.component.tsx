import { useTranslation } from 'react-i18next';
import { useGame, useDashboardDispatch } from '@/src/game/repository/useGame.ts';
import { CardComponent } from '@/src/generic/common/components/card/Card.component';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const BusinessComponent = () => {
  const { t } = useTranslation();
  const setDashboard = useDashboardDispatch();
  const game = useGame();

  return (
    <CardComponent
      className={styles.red}
      style={{
        gridColumn: '2',
        gridRow: 'span 2',
      }}
    >
      <TitleComponent
        className={styles.title}
        title="Business"
      />
      {game.fundsPerSecondFeature.open ? (
        <DialComponent
          value={game.fundsPerSecond}
          style="currency"
          label="Funds per second"
        />
      ) : null}
      <DialComponent
        value={game.funds}
        style="currency"
        label="Fonds disponibles"
      />
      <GroupComponent>
        <DialComponent
          value={game.clipsStock}
          notation="compact"
          label="Unsold Inventory"
        />
        <BonusComponent
          value={game.productionBonus}
          style="percent"
        />
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          value={game.clipsCost}
          style="currency"
          label="Prix trombone"
        />
        <DialComponent
          value={game.publicDemand}
          style="percent"
          label="publicDemand"
        />
      </GroupComponent>
      <GroupComponent>
        <ButtonComponent
          className={styles.button}
          disabled={game.clipsCost === 1}
          onClick={() => setDashboard({ type: 'INCREASE_CLIPS_COST' })}
        >
          {t('common.button.raise')}
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          disabled={game.clipsCost === 0.1}
          onClick={() => setDashboard({ type: 'DECREASE_CLIPS_COST' })}
        >
          {t('common.button.lower')}
        </ButtonComponent>
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          value={game.marketingCost}
          style="currency"
          label="Prix marketing"
          disabled={game.marketing >= 10}
        />
        <DialComponent
          value={game.marketing}
          limit={10}
          notation="compact"
          label="Marketing"
        />
      </GroupComponent>
      <GroupComponent>
        <ButtonComponent
          className={styles.button}
          disabled={game.marketingCost > game.funds || game.marketing >= 10}
          onClick={() => setDashboard({ type: 'BUY_MARKETING' })}
        >
          {t('common.button.buy')}
        </ButtonComponent>
      </GroupComponent>
    </CardComponent>
  );
};
