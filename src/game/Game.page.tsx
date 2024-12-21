import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { fallback } from '../generic/utils/fallback';
import { HeaderComponent } from '../generic/components/header/Header.component';
import { MainComponent } from '../generic/components/main/Main.component';
import { FooterComponent } from '../generic/components/footer/Footer.component';
import { LoaderComponent } from '../generic/components/loader/Loader.component';
import styles from './Game.module.scss';

const DURATION_1 = 4e2;
const DURATION_2 = 6e2;

const GlossaryComponent = lazy(() =>
  fallback(import('./components/glossary/Glossary.component'), DURATION_1)
);

const DashboardComponent = lazy(() =>
  fallback(import('./components/dashboard/Dashboard.component'), DURATION_2)
);

function GamePage() {
  return (
    <>
      <HeaderComponent>
        <Suspense
          fallback={
            <LoaderComponent
              aria-label="Chargement..."
              className={styles.loader}
              duration={DURATION_1}
            />
          }
        >
          <GlossaryComponent />
        </Suspense>
      </HeaderComponent>
      <MainComponent>
        <Suspense
          fallback={
            <LoaderComponent
              aria-label="Chargement..."
              className={styles.loader}
              duration={DURATION_2}
            />
          }
        >
          <div className="navigation">
            <Link to="/paperclips/">Game</Link>
            <Link to="/paperclips/glossary/autoclippers/">AutoClipers</Link>
          </div>
          <DashboardComponent />
        </Suspense>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default GamePage;
