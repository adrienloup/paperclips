import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { fallback } from '@/src/generic/utils/fallback.ts';
import { LoaderComponent } from '@/src/generic/common/components/loader/Loader.component.tsx';
import { LayoutComponent } from '@/src/generic/common/components/layout/Layout.component.tsx';
import { useTitle } from '@/src/generic/hooks/useTitle.ts';

const DashboardComponent = lazy(() =>
  fallback(import('@/src/pages/game/components/dashboard/Dashboard.component.tsx'), 1e3)
);

function GamePage() {
  //console.log('GamePage');
  const { t } = useTranslation();

  useTitle(t('game.titlePage'));

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
        <DashboardComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default GamePage;
