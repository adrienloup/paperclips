import { useEffect, useState } from 'react';
import { classNames } from '../../utils/classNames';
import { Loader } from './Loader.type';
import styles from './Loader.module.scss';

export const LoaderComponent = ({
  className,
  duration = 1e3,
  size = 'large',
  ...props
}: Loader) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count == 100) return;

    const interval: number = setInterval(
      () => setCount((count: number) => count + 1),
      duration / 200
    );

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div
      className={classNames([styles.loader, styles[size], className])}
      style={
        {
          '--duration': `${duration}ms`,
        } as React.CSSProperties
      }
      {...props}
    >
      <span className={styles.label}>{count}%</span>
    </div>
  );
};
