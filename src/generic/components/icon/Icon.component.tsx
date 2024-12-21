import { classNames } from '../../utils/classNames';
import { Icon } from './Icon.type';
import styles from './Icon.module.scss';

export const IconComponent = ({ icon, className }: Icon) => {
  return (
    <span aria-hidden={false} className={classNames([styles.icon, className])}>
      {icon}
    </span>
  );
};
