import { lazy, Suspense } from 'react';
import { fallback } from '../../../generic/utils/fallback';
import { LoaderComponent } from '../../../generic/components/loader/Loader.component';
import { FeaturesComponent } from '../features/Features.component';
import styles from './Dashboard.module.scss';

const PaperclipsComponent = lazy(() =>
  fallback(import('../paperclips/Paperclips.component'), 4e2)
);

const ManufacturingComponent = lazy(() =>
  fallback(import('../manufacturing/Manufacturing.component'), 6e2)
);

const BusinessComponent = lazy(() =>
  fallback(import('../business/Business.component'), 8e2)
);

const ComputationalComponent = lazy(() =>
  fallback(import('../computational/Computational.component'), 1e3)
);

export const DashboardComponent = () => {
  return (
    <article className={styles.dashboard}>
      <FeaturesComponent />
      <Suspense
        fallback={
          <div className={styles.paperclips}>
            <LoaderComponent aria-label="@TODO: Chargement..." duration={4e2} />
          </div>
        }
      >
        <PaperclipsComponent />
      </Suspense>
      <div className={styles.group}>
        <Suspense
          fallback={
            <div className={styles.manufacturing}>
              <LoaderComponent
                aria-label="@TODO: Chargement..."
                duration={6e2}
              />
            </div>
          }
        >
          <ManufacturingComponent />
        </Suspense>
        <Suspense
          fallback={
            <div className={styles.business}>
              <LoaderComponent
                aria-label="@TODO: Chargement..."
                duration={8e2}
              />
            </div>
          }
        >
          <BusinessComponent />
        </Suspense>
      </div>
      <Suspense
        fallback={
          <div className={styles.computational}>
            <LoaderComponent aria-label="@TODO: Chargement..." duration={1e3} />
          </div>
        }
      >
        <ComputationalComponent />
      </Suspense>
    </article>
  );
};
