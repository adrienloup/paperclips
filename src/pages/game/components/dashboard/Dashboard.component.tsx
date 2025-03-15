import { ManufacturingComponent } from '@/src/pages/game/components/manufacturing/Manufacturing.component.tsx';
import { BusinessComponent } from '@/src/pages/game/components/business/Business.component.tsx';
import { ResourcesComponent } from '@/src/pages/game/components/resources/Resources.component.tsx';
import styles from '@/src/pages/game/components/dashboard/Dashboard.module.scss';

function DashboardComponent() {
  return (
    <article className={styles.dashboard}>
      dashboard
      <ManufacturingComponent />
      <BusinessComponent />
      <ResourcesComponent />
    </article>
  );
}

export default DashboardComponent;
