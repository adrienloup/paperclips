import { lazy, Suspense } from 'react';
import { fallback } from '@/src/generic/utils/fallback';
import { PageComponent } from '@/src/generic/common/components/page/Page.component';
import { LoaderComponent } from '@/src/generic/common/components/loader/Loader.component';
import styles from '@/src/game/Game.module.scss';

const DashboardComponent = lazy(() => fallback(import('./components/dashboard/Dashboard.component'), 1e3));

function GamePage() {
  return (
    <Suspense
      fallback={
        <LoaderComponent
          className={styles.loader}
          aria-label="@TODO: Chargement..."
          duration={1e3}
        />
      }
    >
      <PageComponent>
        <DashboardComponent />
      </PageComponent>
    </Suspense>
  );
}

export default GamePage;
