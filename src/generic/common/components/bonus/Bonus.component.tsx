import { classNames } from '@/src/generic/utils/classNames.ts';
import { Bonus } from '@/src/generic/common/components/bonus/Bonus.type.ts';
import styles from '@/src/generic/common/components/bonus/Bonus.module.scss';

export const BonusComponent = ({ className, value }: Bonus) => {
  return (
    <div className={classNames([styles.bonus, className])}>
      <span>+</span>
      {value}
    </div>
  );
};
