import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const BusinessComponent = () => {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();

  return (
    <CardComponent className={styles.cardB}>
      <TitleComponent
        className={styles.title}
        title="Business"
      />
      <DialComponent
        number={dashboard.fundsPerSecond}
        style="currency"
        label="Funds per second"
      />
      <DialComponent
        number={dashboard.funds}
        style="currency"
        label="Fonds disponibles"
      />
      <GroupComponent>
        <DialComponent
          number={dashboard.clipsStock}
          notation="compact"
          label="Stock trombones"
        />
        {/*{dashboard.marketing > 1 ? (*/}
        <BonusComponent
          number={dashboard.productionBonus}
          style="percent"
        />
        {/*) : null}*/}
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          number={dashboard.clipsCost}
          style="currency"
          label="Prix trombone"
        />
        <DialComponent
          number={dashboard.publicDemand}
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
          Hausser
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          disabled={dashboard.clipsCost === 0.1}
          onClick={() => setDashboard({ type: 'DECREASE_CLIPS_COST' })}
        >
          Baisser
        </ButtonComponent>
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          number={dashboard.marketingCost}
          style="currency"
          label="+1 Marketing level"
          disabled={dashboard.marketing >= 10}
        />
        <DialComponent
          number={dashboard.marketing}
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
          Acheter
        </ButtonComponent>
      </GroupComponent>
    </CardComponent>
  );
};
