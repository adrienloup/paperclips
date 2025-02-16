import { useTranslation } from 'react-i18next';
import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ManufacturingComponent = () => {
  const { t } = useTranslation();
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();

  return (
    <CardComponent className={styles.cardA}>
      <TitleComponent
        className={styles.title}
        title="Manufacturing"
      />
      <DialComponent
        number={dashboard.clipsPerSecond}
        label={t('game.per_second')}
      />
      <ButtonComponent
        className={styles.button}
        disabled={dashboard.wiresStock < 1}
        onClick={() => setDashboard({ type: 'PRODUCE_MANUAL_CLIPS' })}
      >
        Fabriquer
      </ButtonComponent>
      <GroupComponent>
        <DialComponent
          number={dashboard.wiresCost}
          style="currency"
          label={t('game.wire_cost')}
        />
        <DialComponent
          number={dashboard.wiresStock}
          notation="compact"
          label={t('game.wire_stock')}
        />
      </GroupComponent>
      <GroupComponent>
        <ButtonComponent
          className={styles.button}
          disabled={dashboard.funds < dashboard.wiresCost}
          onClick={() => setDashboard({ type: 'BUY_WIRE' })}
        >
          Acheter
        </ButtonComponent>
        <NumberComponent
          className={styles.number}
          number={dashboard.wires + dashboard.wiresBonus * dashboard.wires}
          notation="compact"
          unit="inches"
        />
        {dashboard.wiresBonus > 0 ? (
          <BonusComponent
            number={dashboard.wiresBonus}
            style="percent"
          />
        ) : null}
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          number={dashboard.autoClippersCost}
          style="currency"
          label="Prix machine"
        />
        <DialComponent
          number={dashboard.autoClippers}
          notation="compact"
          label="Machines"
        />
      </GroupComponent>
      <ButtonComponent
        className={styles.button}
        disabled={dashboard.autoClippersCost > dashboard.funds}
        onClick={() => setDashboard({ type: 'BUY_AUTOCLIPPERS' })}
      >
        Acheter
      </ButtonComponent>
      <GroupComponent>
        <DialComponent
          number={dashboard.megaClippersCost}
          style="currency"
          label="Prix mégamachine"
        />
        <DialComponent
          number={dashboard.megaClippers}
          notation="compact"
          label="Mégamachines"
        />
      </GroupComponent>
      <ButtonComponent
        className={styles.button}
        disabled={dashboard.megaClippersCost > dashboard.funds}
        onClick={() => setDashboard({ type: 'BUY_MEGACLIPPERS' })}
      >
        Acheter
      </ButtonComponent>
    </CardComponent>
  );
};
