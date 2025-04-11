import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import styles from '@/src/pages/game/components/debug/Debug.module.scss';

export const DebugComponent = () => {
  console.log('DebugComponent');
  const location = useLocation();
  const [count, setCount] = useState(0);
  const setAlerts = useAlertsDispatch();

  const display = useMemo(() => {
    const isDebug = location.search == '?debug';
    if (isDebug) {
      window.localStorage.setItem('_debug_3mma_0', '1');
    } else {
      window.localStorage.removeItem('_debug_3mma_0');
    }
    return isDebug;
  }, [location.search]);

  return display ? (
    <div
      className={styles.debug}
      role="complementary"
    >
      <div>
        <label>
          Alerts{' '}
          <button
            type="button"
            onClick={() => setAlerts({ type: 'ADD', alert: { text: 'alert1' } })}
          >
            1
          </button>
        </label>
      </div>
      <button onClick={() => setCount((prev: number) => prev + 1)}>{count}</button>
    </div>
  ) : null;
};
