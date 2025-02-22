import { Suspense } from 'react';
import { useTitle } from '@/src/generic/hooks/useTitle';
import { PageComponent } from '@/src/generic/common/components/page/Page.component';
import { LoaderComponent } from '@/src/generic/common/components/loader/Loader.component';
import { DebugComponent } from '@/src/generic/common/components/debug/Debug.component';
import styles from '@/src/summary/Summary.module.scss';

function ExplorePage() {
  useTitle('Explore');

  return (
    <Suspense
      fallback={
        <LoaderComponent
          className={styles.loader}
          aria-label="@TODO"
          duration={1e3}
        />
      }
    >
      <PageComponent>
        <DebugComponent>Debug</DebugComponent>
        <h1>Explore Page</h1>
      </PageComponent>
    </Suspense>
  );
}

export default ExplorePage;
