import { classNames } from '@/src/generic/utils/classNames';
import { Icon } from '@/src/generic/common/components/icon/Icon.type';
import styles from '@/src/generic/common/components/icon/Icon.module.scss';

export const IconComponent = ({ icon, className, ...props }: Icon) => {
  return (
    <span aria-hidden={false} className={classNames([styles.icon, className])} {...props}>
      {icon}
    </span>
  );
};
