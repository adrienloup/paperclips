import { classNames } from '@/src/generic/utils/classNames.ts';
import { NumberComponent } from '@/src/generic/common/component/number/Number.component.tsx';
import { Bonus } from '@/src/generic/common/component/bonus/Bonus.type.ts';
import styles from '@/src/generic/common/component/bonus/Bonus.module.scss';

export const BonusComponent = ({ className, value, sign }: Bonus) => {
  return (
    <div className={classNames([styles.bonus, className])}>
      {sign}
      <NumberComponent
        value={value}
        notation="compact"
      />
    </div>
  );
};
