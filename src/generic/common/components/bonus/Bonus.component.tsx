import { classNames } from '@/src/generic/utils/classNames.ts';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import { Bonus } from '@/src/generic/common/components/bonus/Bonus.type.ts';
import styles from '@/src/generic/common/components/bonus/Bonus.module.scss';

export const BonusComponent = ({ className, value, prefix }: Bonus) => {
  return (
    <div className={classNames([styles.bonus, className])}>
      {prefix}
      <NumberComponent
        value={value}
        notation="compact"
      />
    </div>
  );
};
