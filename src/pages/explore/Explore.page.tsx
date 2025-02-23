import { Suspense } from 'react';
import { useTitle } from '@/src/generic/hooks/useTitle.ts';
import { PageComponent } from '@/src/generic/common/components/page/Page.component.tsx';
import { LoaderComponent } from '@/src/generic/common/components/loader/Loader.component.tsx';
import { DebugComponent } from '@/src/generic/common/components/debug/Debug.component.tsx';
import styles from '@/src/pages/summary/Summary.module.scss';

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
