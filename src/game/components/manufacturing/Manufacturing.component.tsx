import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { CardComponent } from '@/src/generic/common/components/cards/Card.component';
import { CardGroupComponent } from '@/src/generic/common/components/cards/CardGroup.component';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component';
import styles from '@/src/generic/common/components/cards/Card.module.scss';

export const ManufacturingComponent = () => {
  const { t } = useTranslation();
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();
  const dashboardRef = useRef(dashboard);

  useEffect(() => {
    const interval = setInterval(() => {
      const { wireStock } = dashboardRef.current;
      if (wireStock > 0) {
        setDashboard({ type: 'UPDATE_PER_SECOND' });
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, []);

  return (
    <CardComponent className={styles.small}>
      <TitleComponent title="Manufacturing" />
      <DialComponent
        number={dashboard.clipsPerSecond}
        label={t('game.per_second')}
      />
      <ButtonComponent
        className={styles.button}
        disabled={dashboard.wireStock < 1}
        onClick={() => setDashboard({ type: 'PRODUCE_MANUAL_CLIPS' })}
      >
        Fabriquer
      </ButtonComponent>
      <CardGroupComponent>
        <DialComponent
          number={dashboard.wireCost}
          style="currency"
          label={t('game.wire_cost')}
        />
        <DialComponent
          number={dashboard.wireStock}
          notation="compact"
          label={t('game.wire_stock')}
        />
      </CardGroupComponent>
      <CardGroupComponent>
        <ButtonComponent
          className={styles.button}
          disabled={dashboard.funds < dashboard.wireCost}
          onClick={() => setDashboard({ type: 'BUY_WIRE' })}
        >
          Acheter
        </ButtonComponent>
        <div>
          <NumberComponent
            number={Math.round(dashboard.wireBonus * 1e4)}
            notation="compact"
          />
          &nbsp;inches
        </div>
        {dashboard.wireBonus > 0.1 ? (
          <BonusComponent
            number={dashboard.wireBonus}
            style="percent"
          />
        ) : null}
      </CardGroupComponent>
    </CardComponent>
  );
};
