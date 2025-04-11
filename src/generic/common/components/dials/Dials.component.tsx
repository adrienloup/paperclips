import { classNames } from '@/src/generic/utils/classNames.ts';
import { Dials } from '@/src/generic/common/components/dials/Dials.type.ts';
import styles from '@/src/generic/common/components/dials/Dials.module.scss';

export const DialsComponent = ({ children, className, direction = 'row' }: Dials) => {
  return <div className={classNames([styles.dials, className, styles[direction]])}>{children}</div>;
};
