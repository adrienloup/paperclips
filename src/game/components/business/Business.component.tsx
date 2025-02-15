import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { CardComponent } from '@/src/generic/common/components/cards/Card.component';
import { CardGroupComponent } from '@/src/generic/common/components/cards/CardGroup.component';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component';
import styles from '@/src/generic/common/components/cards/Card.module.scss';

export const BusinessComponent = () => {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();

  return (
    <CardComponent>
      <TitleComponent title="Business" />
      <DialComponent
        number={dashboard.funds}
        style="currency"
        label="Fonds disponibles"
      />
      <CardGroupComponent>
        <DialComponent
          number={dashboard.clipsStock}
          notation="compact"
          label="Stock trombones"
        />
        {dashboard.marketing > 1 ? (
          <BonusComponent
            number={dashboard.productionBonus}
            style="percent"
          />
        ) : null}
      </CardGroupComponent>
      <CardGroupComponent>
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
      </CardGroupComponent>
      <CardGroupComponent>
        <ButtonComponent
          className={styles.button}
          disabled={dashboard.publicDemand === 1}
          onClick={() => setDashboard({ type: 'DECREASE_CLIPS_COST' })}
        >
          Diminuer
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          disabled={dashboard.publicDemand === 0.01}
          onClick={() => setDashboard({ type: 'INCREASE_CLIPS_COST' })}
        >
          Augmenter
        </ButtonComponent>
      </CardGroupComponent>
      <CardGroupComponent>
        <DialComponent
          number={dashboard.marketingCost}
          style="currency"
          label="Prix marketing"
          disabled={dashboard.marketing >= 10}
        />
        <DialComponent
          number={dashboard.marketing}
          notation="compact"
          label="Level"
        />
      </CardGroupComponent>
      <CardGroupComponent>
        <ButtonComponent
          className={styles.button}
          disabled={dashboard.marketingCost > dashboard.funds || dashboard.marketing >= 10}
          onClick={() => setDashboard({ type: 'UPDATE_MARKETING' })}
        >
          Acheter
        </ButtonComponent>
      </CardGroupComponent>
    </CardComponent>
  );
};
