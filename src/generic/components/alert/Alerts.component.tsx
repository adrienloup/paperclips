import { Children } from '../../types/Children.type';
import styles from './Alerts.module.scss';

export const AlertsComponent = ({ children }: { children: Children }) => {
  return (
    <div className={styles.alerts}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
