import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ITResourcesComponent = () => {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();

  return (
    <CardComponent className={styles.cardC}>
      <TitleComponent
        className={styles.title}
        title="IT Resources"
      />
      <GroupComponent>
        <DialComponent
          number={dashboard.trustCost}
          notation="compact"
          unit="clips"
          label="+1 Trust level"
        />
        <DialComponent
          number={dashboard.trust}
          notation="compact"
          label="Trust"
        />
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          number={dashboard.processors}
          notation="compact"
          label="Processors"
        />
        <DialComponent
          number={dashboard.memory}
          notation="compact"
          label="Memory"
        />
      </GroupComponent>
      <GroupComponent>
        <ButtonComponent
          className={styles.button}
          disabled={dashboard.processors + dashboard.memory >= dashboard.trust}
          onClick={() => setDashboard({ type: 'INCREASE_PROCESSORS' })}
        >
          Obtenir
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          disabled={dashboard.memory + dashboard.processors >= dashboard.trust}
          onClick={() => setDashboard({ type: 'INCREASE_MEMORY' })}
        >
          Obtenir
        </ButtonComponent>
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          number={Number('50 000 / 50 000')}
          notation="compact"
          label="Operations"
        />
      </GroupComponent>
    </CardComponent>
  );
};
