import { useEffect, useState } from 'react';
import { classNames } from '../../utils/classNames';
import { Loader } from './Loader.type';
import styles from './Loader.module.scss';

export const LoaderComponent = ({ className, duration = 1e3, size = 'large' }: Loader) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count == 100) return;
    const interval = setInterval(() => setCount((count) => count + 1), duration / 200);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className={classNames([styles.loader, styles[size], className])} style={{ '--loader-duration': `${duration}ms` } as React.CSSProperties}>
      <span className={styles.label}>{count}%</span>
    </div>
  );
};
