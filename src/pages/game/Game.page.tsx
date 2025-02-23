import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { fallback } from '@/src/generic/utils/fallback';
import { useTitle } from '@/src/generic/hooks/useTitle';
import { PageComponent } from '@/src/generic/common/components/page/Page.component';
import { NotificationsComponent } from '@/src/pages/game/components/notifications/Notifications.component';
import { LoaderComponent } from '@/src/generic/common/components/loader/Loader.component';
import styles from '@/src/pages/game/Game.module.scss';

const DashboardComponent = lazy(() =>
  fallback(import('./components/dashboard/Dashboard.component'), 1e3)
);

function GamePage() {
  const { t } = useTranslation();

  useTitle(t('game.title'));

  return (
    <Suspense
      fallback={
        <LoaderComponent
          className={styles.loader}
          aria-label={t('game.loading')}
          duration={1e3}
        />
      }
    >
      <PageComponent>
        <DashboardComponent />
        <NotificationsComponent />
      </PageComponent>
    </Suspense>
  );
}

export default GamePage;
