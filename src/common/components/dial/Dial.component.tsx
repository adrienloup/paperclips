import { Dial } from '@/src/common/components/dial/Dial.type';
import styles from './Dial.module.scss';

export const DialComponent = ({ value, label }: Dial) => {
  return (
    <div className={styles.dial}>
      {value}
      {label ? <span>{label}</span> : null}
    </div>
  );
};
