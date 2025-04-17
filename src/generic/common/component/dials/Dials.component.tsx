import { classNames } from '@/src/generic/utils/classNames.ts';
import { Dials } from '@/src/generic/common/component/dials/Dials.type.ts';
import styles from '@/src/generic/common/component/dials/Dials.module.scss';

export const DialsComponent = ({ children, direction = 'column', className }: Dials) => {
  return (
    <div
      className={classNames([styles.dials, className])}
      style={{ flexDirection: direction }}
    >
      {children}
    </div>
  );
};
