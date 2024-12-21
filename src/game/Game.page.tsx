import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { fallback } from '../generic/utils/fallback';
import { useLanguage } from '../generic/i18n/useLanguage';
import { HeaderComponent } from '../generic/components/header/Header.component';
import { MainComponent } from '../generic/components/main/Main.component';
import { FooterComponent } from '../generic/components/footer/Footer.component';
import { LoaderComponent } from '../generic/components/loader/Loader.component';
import styles from './Game.module.scss';

const ExploreComponent = lazy(() =>
  fallback(import('./components/explore/Explore.component'), 6e2)
);

const DashboardComponent = lazy(() =>
  fallback(import('./components/dashboard/Dashboard.component'), 1e3)
);

function GamePage() {
  const { language, setLanguage } = useLanguage();

  const changeLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

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
          <div className="navigation">
            <Link to="/paperclips/">Game</Link>
            <Link to="/paperclips/explore/autoclippers/">AutoClipers</Link>
            <button onClick={changeLanguage}>
              {language === 'fr' ? 'en' : 'fr'}
            </button>
          </div>
          <DashboardComponent />
        </Suspense>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default GamePage;
