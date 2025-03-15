import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '@/src/pages/game/components/debug/Debug.module.scss';

export const DebugComponent = () => {
  const location = useLocation();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const debug =
      location.search.split('=')[0] === '?debug' ? location.search.split('=').pop() : '';
    if (debug === '1') {
      window.localStorage.setItem('_paperclips_3mma_0_debug', '1');
    } else if (debug === '0') {
      window.localStorage.removeItem('_paperclips_3mma_0_debug');
    }
    setDisplay(!!window.localStorage.getItem('_paperclips_3mma_0_debug'));
  }, []);

  return (
    <>
      {display && (
        <div className={styles.debug}>
          <div className={styles.inner}>debug</div>
        </div>
      )}
    </>
  );
};
