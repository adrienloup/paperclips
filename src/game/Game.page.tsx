import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { fallback } from '@/src/generic/utils/fallback';
import { useTitle } from '@/src/generic/hooks/useTitle';
import { PageComponent } from '@/src/generic/common/components/page/Page.component';
import { AsideComponent } from '@/src/game/components/aside/Aside.component';
import { LoaderComponent } from '@/src/generic/common/components/loader/Loader.component';
import styles from '@/src/game/Game.module.scss';

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
          aria-label="@TODO: Chargement..."
          duration={1e3}
        />
      }
    >
      <PageComponent>
        <DashboardComponent />
        <AsideComponent />
      </PageComponent>
    </Suspense>
  );
}

export default GamePage;
