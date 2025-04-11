import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import styles from '@/src/pages/game/components/dashboard/total/Total.module.scss';

export const TotalComponent = () => {
  return (
    <TitleComponent
      tag="h1"
      className={styles.total}
    >
      <NumberComponent
        className={styles.number}
        value={10000000000000000000000000000}
      />
      <div className={styles.label}>Total number of paperclips</div>
    </TitleComponent>
  );
};
