import { lazy, Suspense } from 'react';
import { fallback } from '@/src/generic/utils/fallback';
import { PageComponent } from '@/src/common/components/page/Page.component';
import { LoaderComponent } from '@/src/common/components/loader/Loader.component';
import styles from './Game.module.scss';

const DashboardComponent = lazy(() => fallback(import('./components/dashboard/Dashboard.component'), 1e3));

function GamePage() {
  return (
    <PageComponent>
      <Suspense
        fallback={<LoaderComponent className={styles.loader} aria-label="@TODO: Chargement..." duration={1e3} />}
      >
        <DashboardComponent />
      </Suspense>
    </PageComponent>
  );
}

export default GamePage;
