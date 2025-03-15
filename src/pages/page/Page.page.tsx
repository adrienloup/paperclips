import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { fallback } from '@/src/generic/utils/fallback.ts';
import { useTitle } from '@/src/generic/hooks/useTitle.ts';
import { LoaderComponent } from '@/src/generic/common/components/loader/Loader.component.tsx';
import { LayoutComponent } from '@/src/generic/common/components/layout/Layout.component.tsx';

const IntroductionComponent = lazy(() =>
  fallback(import('@/src/pages/page/components/introduction/Introduction.component.tsx'), 1e3)
);

function PagePage() {
  const { t } = useTranslation();

  useTitle(t('page.titlePage'));

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
        <IntroductionComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default PagePage;
