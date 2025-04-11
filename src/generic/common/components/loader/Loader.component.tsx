import { CSSProperties, useEffect, useState } from 'react';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { Loader } from '@/src/generic/common/components/loader/Loader.type.ts';
import styles from '@/src/generic/common/components/loader/Loader.module.scss';

export const LoaderComponent = ({
  className,
  duration = 1e3,
  size = 'large',
  ...props
}: Loader) => {
  const [count, setCount] = useState(0);

  const getStyle = (duration: number, count: number) =>
    ({ '--duration': `${duration / 100}ms`, width: `${count}%` }) as CSSProperties;

  useEffect(() => {
    if (count >= 100) return;
    const interval = setInterval(() => setCount((prev) => Math.min(prev + 1, 100)), duration / 100);
    return () => clearInterval(interval);
  }, [count, duration]);

  return (
    <div
      className={classNames([styles.loader, styles[size], className])}
      {...props}
    >
      <span className={styles.label}>{count}%</span>
      <div
        className={styles.progressbar}
        role="progressbar"
        aria-valuenow={count}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={styles.inner}
          style={getStyle(duration, count)}
        ></div>
      </div>
    </div>
  );
};
