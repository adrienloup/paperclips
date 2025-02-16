import { useTranslation } from 'react-i18next';
import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
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
  const dashboard = useDashboard();

  return (
    <CardComponent
      style={{
        gridColumn: '2',
        gridRow: 'span 2',
      }}
    >
      <TitleComponent
        className={styles.title}
        title="Business"
      />
      {dashboard.fundsPerSecondFeature.open ? (
        <DialComponent
          value={dashboard.fundsPerSecond}
          style="currency"
          label="Funds per second"
        />
      ) : null}
      <DialComponent
        value={dashboard.funds}
        style="currency"
        label="Fonds disponibles"
      />
      <GroupComponent>
        <DialComponent
          value={dashboard.clipsStock}
          notation="compact"
          label="Unsold Inventory"
        />
        <BonusComponent
          value={dashboard.productionBonus}
          style="percent"
        />
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          value={dashboard.clipsCost}
          style="currency"
          label="Prix trombone"
        />
        <DialComponent
          value={dashboard.publicDemand}
          style="percent"
          label="publicDemand"
        />
      </GroupComponent>
      <GroupComponent>
        <ButtonComponent
          className={styles.button}
          disabled={dashboard.clipsCost === 1}
          onClick={() => setDashboard({ type: 'INCREASE_CLIPS_COST' })}
        >
          {t('common.button.raise')}
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          disabled={dashboard.clipsCost === 0.1}
          onClick={() => setDashboard({ type: 'DECREASE_CLIPS_COST' })}
        >
          {t('common.button.lower')}
        </ButtonComponent>
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          value={dashboard.marketingCost}
          style="currency"
          label="Prix marketing"
          disabled={dashboard.marketing >= 10}
        />
        <DialComponent
          value={dashboard.marketing}
          limit={10}
          notation="compact"
          label="Marketing"
        />
      </GroupComponent>
      <GroupComponent>
        <ButtonComponent
          className={styles.button}
          disabled={dashboard.marketingCost > dashboard.funds || dashboard.marketing >= 10}
          onClick={() => setDashboard({ type: 'BUY_MARKETING' })}
        >
          {t('common.button.buy')}
        </ButtonComponent>
      </GroupComponent>
    </CardComponent>
  );
};
