import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { fallback } from '@/src/generic/utils/fallback.ts';
import { useTitle } from '@/src/generic/hooks/useTitle.ts';
import { LoaderComponent } from '@/src/generic/common/components/loader/Loader.component.tsx';
import { DebugComponent } from '@/src/pages/game/components/debug/Debug.component.tsx';
import { DashboardComponent } from '@/src/pages/game/components/dashboard/Dashboard.component.tsx';
import { NotificationsComponent } from '@/src/pages/game/components/notifications/Notifications.component.tsx';
import { FeaturesComponent } from '@/src/pages/game/components/features/Features.component.tsx';

const LayoutComponent = lazy(() =>
  fallback(import('@/src/generic/common/components/layout/Layout.component.tsx'), 2e3)
);

function GamePage() {
  const { t } = useTranslation();

  useTitle(t('game.titlePage'));

  return (
    <Suspense fallback={<LoaderComponent aria-label={t('common.loading')} />}>
      <LayoutComponent>
        <DebugComponent />
        <DashboardComponent />
        <NotificationsComponent />
        <FeaturesComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default GamePage;
