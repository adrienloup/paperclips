import { classNames } from '@/src/generic/utils/classNames';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component';
import { Dial } from '@/src/generic/common/components/dial/Dial.type';
import styles from '@/src/generic/common/components/dial/Dial.module.scss';

export const DialComponent = ({ value, limit, style, notation, label, disabled }: Dial) => {
  return (
    <div className={classNames([styles.dial, disabled ? styles.disabled : ''])}>
      <NumberComponent
        className={styles.number}
        value={value}
        limit={limit}
        style={style}
        notation={notation}
      />
      <span className={styles.label}>{label}</span>
    </div>
  );
};
