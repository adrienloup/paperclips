import { useEffect, useState } from 'react';
import { Children } from '@/src/generic/types/Children.type.ts';
import styles from '@/src/generic/common/components/alert/Alerts.module.scss';

export const AlertsComponent = ({ children }: { children: Children }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const onResize = () => setHeight(document.body.offsetHeight);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div
      className={styles.alerts}
      style={{
        height: `${height}px`,
      }}
    >
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
