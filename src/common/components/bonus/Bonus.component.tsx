import { classNames } from '@/src/generic/utils/classNames';
import { Bonus } from '@/src/common/components/bonus/Bonus.type';
import { NumberComponent } from '@/src/common/components/number/Number.component';
import styles from '@/src/common/components/bonus/Bonus.module.scss';

export const BonusComponent = ({ className, number, style }: Bonus) => {
  return (
    <div className={classNames([styles.bonus, className])}>
      +<NumberComponent number={number} style={style} />
    </div>
  );
};
