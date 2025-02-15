import { CardComponent } from '@/src/generic/common/components/cards/Card.component';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component';
import { CardGroupComponent } from '@/src/generic/common/components/cards/CardGroup.component';
import { useDashboard } from '@/src/game/components/dashboard/useDashboard';
import styles from '@/src/generic/common/components/cards/Card.module.scss';

export const ComputationalComponent = () => {
  const dashboard = useDashboard();

  return (
    <CardComponent>
      <TitleComponent
        className={styles.title}
        title="Computational Resources"
      />
      <CardGroupComponent>
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
        />
      </CardGroupComponent>
      <CardGroupComponent>
        <DialComponent
          number={dashboard.trustCost}
          notation="compact"
          label="+1 Processors"
        />
        <DialComponent
          number={dashboard.processors}
          notation="compact"
          label="Level"
        />
      </CardGroupComponent>
    </CardComponent>
  );
};
