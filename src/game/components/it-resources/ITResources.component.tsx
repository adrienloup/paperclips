import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { CardComponent } from '@/src/generic/common/components/card/Card.component';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ITResourcesComponent = () => {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();

  return (
    <CardComponent
      style={{
        gridColumn: '3',
        gridRow: '1',
      }}
    >
      <TitleComponent
        className={styles.title}
        title="IT Resources"
      />
      <GroupComponent>
        <DialComponent
          value={dashboard.trust}
          limit={100}
          notation="compact"
          label="Trust"
        />
        <div className={styles.text}>
          +1 Trust at
          <NumberComponent
            className={styles.number}
            value={dashboard.trustCost}
            notation="compact"
          />
          clips
        </div>
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          value={dashboard.processors}
          notation="compact"
          label="Processors"
        />
        <DialComponent
          value={dashboard.memory}
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
          Hausser
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          disabled={dashboard.memory + dashboard.processors >= dashboard.trust}
          onClick={() => setDashboard({ type: 'INCREASE_MEMORY' })}
        >
          Hausser
        </ButtonComponent>
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          value={dashboard.operations}
          limit={dashboard.operationsLimit}
          notation="compact"
          label="Operations"
        />
        <DialComponent
          value={dashboard.creativity}
          notation="compact"
          label="Creativity"
        />
      </GroupComponent>
    </CardComponent>
  );
};
