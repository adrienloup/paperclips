import { Progressbar } from '@/src/generic/common/components/progressbar/Progressbar.type.ts';
import styles from '@/src/generic/common/components/progressbar/Progressbar.module.scss';
import { classNames } from '@/src/generic/utils/classNames.ts';

export const ProgressbarComponent = ({ progress, size = 'small' }: Progressbar) => {
  const getStyle = (progress: number) => ({ width: `${progress}%` });

  return (
    <div
      className={classNames([styles.progressbar, styles[size]])}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={styles.progress}
        style={getStyle(progress)}
      ></div>
    </div>
  );
};
