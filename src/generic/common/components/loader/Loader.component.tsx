import React, { useEffect, useState } from 'react';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { Loader } from '@/src/generic/common/components/loader/Loader.type.ts';
import styles from '@/src/generic/common/components/loader/Loader.module.scss';

export const LoaderComponent = React.memo(({ className, duration = 1e3, ...props }: Loader) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 100) return;
    const interval = setInterval(() => setCount((prev) => (prev < 100 ? prev + 1 : prev)), duration / 200);
    return () => clearInterval(interval);
  }, [count, duration]);

  return (
    <div
      className={classNames([styles.loader, className])}
      {...props}
    >
      <span
        className={styles.label}
        title="Paperclips"
      >
        Paperclips
      </span>
      <span className={styles.value}>{count}%</span>
    </div>
  );
});
