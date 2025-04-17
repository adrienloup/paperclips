import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { fallback } from '@/src/generic/utils/fallback.ts';
import { useTitle } from '@/src/generic/hook/useTitle.ts';
import { LoaderComponent } from '@/src/generic/common/component/loader/Loader.component.tsx';
import { DebugComponent } from '@/src/page/game/component/debug/Debug.component.tsx';
import { DashboardComponent } from '@/src/page/game/component/dashboard/Dashboard.component.tsx';
import { FeaturesComponent } from '@/src/page/game/component/features/Features.component.tsx';

const LayoutComponent = lazy(() =>
  fallback(import('@/src/generic/common/component/layout/Layout.component.tsx'), 2e3)
);

function GamePage() {
  const { t } = useTranslation();

  useTitle(t('game.titlePage'));

  return (
    <Suspense fallback={<LoaderComponent aria-label={t('common.loading')} />}>
      <LayoutComponent>
        <DebugComponent />
        <DashboardComponent />
        <FeaturesComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default GamePage;
