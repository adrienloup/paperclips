import { Dial } from '@/src/common/components/dial/Dial.type';
import styles from '@/src/common/components/dial/Dial.module.scss';
import { NumberComponent } from '@/src/common/components/number/Number.component.tsx';
import { classNames } from '@/src/generic/utils/classNames.ts';

export const DialComponent = ({ number, style, notation, outStock, label }: Dial) => {
  return (
    <div className={classNames([styles.dial, outStock ? styles.outStock : ''])}>
      <NumberComponent number={number} style={style} notation={notation} />
      {label ? <span>{label}</span> : null}
    </div>
  );
};
