import { classNames } from '@/src/generic/utils/classNames';
import { Bonus } from '@/src/generic/common/components/bonus/Bonus.type';
import styles from '@/src/generic/common/components/bonus/Bonus.module.scss';

export const BonusComponent = ({ className, value }: Bonus) => {
  return <div className={classNames([styles.bonus, className])}>x{value}</div>;
};
