import { classNames } from '@/src/generic/utils/classNames';
import { Dial } from '@/src/generic/common/components/dial/Dial.type';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component';
import styles from '@/src/generic/common/components/dial/Dial.module.scss';

export const DialComponent = ({ number, style, notation, label, disabled }: Dial) => {
  return (
    <div className={classNames([styles.dial, disabled ? styles.disabled : ''])}>
      <NumberComponent
        className={styles.number}
        number={number}
        style={style}
        notation={notation}
      />
      <span className={styles.label}>{label}</span>
    </div>
  );
};
