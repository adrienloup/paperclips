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
          label="+1 Trust"
          unit="clips"
        />
        <DialComponent
          number={dashboard.trust}
          notation="compact"
          label="Level"
          unit="/ 100"
        />
      </GroupComponent>
      <GroupComponent>
        <GroupComponent direction="column">
          <DialComponent
            number={dashboard.processors}
            notation="compact"
            label="Processors"
          />
          <ButtonComponent
            className={styles.button}
            disabled={dashboard.processors + dashboard.memory >= dashboard.trust}
            onClick={() => setDashboard({ type: 'INCREASE_PROCESSORS' })}
          >
            Augmenter
          </ButtonComponent>
        </GroupComponent>
        <GroupComponent direction="column">
          <DialComponent
            number={dashboard.memory}
            notation="compact"
            label="Memory"
          />
          <ButtonComponent
            className={styles.button}
            disabled={dashboard.memory + dashboard.processors >= dashboard.trust}
            onClick={() => setDashboard({ type: 'INCREASE_MEMORY' })}
          >
            Augmenter
          </ButtonComponent>
        </GroupComponent>
      </GroupComponent>
    </CardComponent>
  );
};
