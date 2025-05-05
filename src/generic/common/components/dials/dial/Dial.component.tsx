import { classNames } from '@/src/generic/utils/classNames.ts';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import { Dial } from '@/src/generic/common/components/dials/dial/Dial.type.ts';
import styles from '@/src/generic/common/components/dials/dial/Dial.module.scss';

export const DialComponent = ({ disabled, label, value, valueMax, notation, style, bonus }: Dial) => {
  return (
    <div className={classNames([styles.dial, disabled ? styles.disabled : ''])}>
      <NumberComponent
        className={styles.number}
        valueMax={valueMax}
        notation={notation}
        compactDisplay={notation == 'compact' ? 'short' : undefined}
        style={style}
        value={value}
      />
      {bonus}
      <span className={styles.label}>{label}</span>
    </div>
  );
};
