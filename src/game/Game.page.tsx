import { lazy, Suspense, useState } from 'react';
import { fallback } from '../generic/utils/fallback';
import { HeaderComponent } from '../generic/components/header/Header.component';
import { MainComponent } from '../generic/components/main/Main.component';
import { FooterComponent } from '../generic/components/footer/Footer.component';
import { SidebarComponent } from '../generic/components/sidebar/Sidebar.component';
import { LoaderComponent } from '../generic/components/loader/Loader.component';
import styles from './Game.module.scss';

const ExploreComponent = lazy(() =>
  fallback(import('./components/explore/Explore.component'), 6e2)
);

const DashboardComponent = lazy(() =>
  fallback(import('./components/dashboard/Dashboard.component'), 1e3)
);

function GamePage() {
  const [isOpen, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!isOpen);

  return (
    <>
      <HeaderComponent>
        <Suspense
          fallback={
            <LoaderComponent
              aria-label="Chargement..."
              className={styles.loader}
              duration={6e2}
            />
          }
        >
          <ExploreComponent />
        </Suspense>
      </HeaderComponent>
      <MainComponent>
        <Suspense
          fallback={
            <LoaderComponent
              aria-label="Chargement..."
              className={styles.loader}
              duration={1e3}
              size="large"
            />
          }
        >
          <button onClick={toggleSidebar}>settings</button>
          <DashboardComponent />
          <SidebarComponent isOpen={isOpen} onclick={toggleSidebar} />
        </Suspense>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default GamePage;
