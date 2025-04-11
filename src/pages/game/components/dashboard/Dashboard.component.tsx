import { useCallback } from 'react';
import { useInterval } from '@/src/generic/hooks/useInterval.ts';
import { TotalComponent } from '@/src/pages/game/components/dashboard/total/Total.component.tsx';
import { ManufacturingComponent } from '@/src/pages/game/components/dashboard/manufacturing/Manufacturing.component.tsx';
import { BusinessComponent } from '@/src/pages/game/components/dashboard/business/Business.component.tsx';
import { TechnologyComponent } from '@/src/pages/game/components/dashboard/technology/Technology.component.tsx';
import styles from '@/src/pages/game/components/dashboard/Dashboard.module.scss';

export const DashboardComponent = () => {
  const sellClips = useCallback(() => {
    console.log('sellClips');
  }, []);

  useInterval(sellClips, 5e2);

  return (
    <article
      className={styles.dashboard}
      role="article"
    >
      <TotalComponent />
      <ManufacturingComponent />
      <BusinessComponent />
      <TechnologyComponent />
    </article>
  );
};
