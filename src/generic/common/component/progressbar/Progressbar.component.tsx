import { Progressbar } from '@/src/generic/common/component/progressbar/Progressbar.type.ts';
import styles from '@/src/generic/common/component/progressbar/Progressbar.module.scss';
import { classNames } from '@/src/generic/utils/classNames.ts';

export const ProgressbarComponent = ({
  valueNow,
  valueMin = 0,
  valueMax = 100,
  size = 'small',
  className,
}: Progressbar) => {
  const getStyle = (valueNow: number) => ({ width: `${(valueNow * 100) / valueMax}%` });

  return (
    <div
      className={classNames([styles.progressbar, styles[size], className])}
      role="progressbar"
      aria-valuenow={valueNow}
      aria-valuemin={valueMin}
      aria-valuemax={valueMax}
    >
      <div
        className={styles.progress}
        style={getStyle(valueNow)}
      ></div>
    </div>
  );
};
