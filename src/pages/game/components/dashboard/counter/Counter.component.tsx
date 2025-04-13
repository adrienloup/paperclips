import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import styles from '@/src/pages/game/components/dashboard/counter/Counter.module.scss';

export const CounterComponent = () => {
  console.log('CounterComponent');
  return (
    <div className={styles.counter}>
      <CardComponent>
        <div className={styles.value}>1.999.999.999</div>
      </CardComponent>
    </div>
  );
};
