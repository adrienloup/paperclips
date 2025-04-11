import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { fallback } from '@/src/generic/utils/fallback.ts';
import { useTitle } from '@/src/generic/hooks/useTitle.ts';
import { LoaderComponent } from '@/src/generic/common/components/loader/Loader.component.tsx';
import { CoreComponent } from '@/src/pages/explore/components/core/Core.component.tsx';

const LayoutComponent = lazy(() =>
  fallback(import('@/src/generic/common/components/layout/Layout.component.tsx'), 15e2)
);

function ExplorePage() {
  const { t } = useTranslation();

  useTitle(t('explore.titlePage'));

  return (
    <Suspense
      fallback={
        <LoaderComponent
          aria-label={t('common.loading')}
          duration={1e3}
        />
      }
    >
      <LayoutComponent>
        <CoreComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default ExplorePage;
