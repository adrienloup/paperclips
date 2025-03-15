import { useLanguage } from '@/src/generic/i18n/useLanguage.ts';
import { useMode } from '@/src/generic/mode/useMode.ts';
import { NavigationComponent } from '@/src/generic/common/components/navigation/Navigation.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import styles from '@/src/generic/common/components/header/Header.module.scss';

export const HeaderComponent = () => {
  const [, setLanguage] = useLanguage();
  const [, setMode] = useMode();

  return (
    <header
      className={styles.header}
      role="banner"
    >
      Header
      <NavigationComponent />
      <ButtonComponent
        className={styles.button}
        onClick={() => setLanguage('en')}
      >
        EN
      </ButtonComponent>
      <ButtonComponent
        className={styles.button}
        onClick={() => setLanguage('fr')}
      >
        FR
      </ButtonComponent>
      <ButtonComponent
        className={styles.button}
        onClick={() => setMode('dark')}
      >
        dark
      </ButtonComponent>
      <ButtonComponent
        className={styles.button}
        onClick={() => setMode('light')}
      >
        light
      </ButtonComponent>
      <ButtonComponent
        className={styles.button}
        onClick={() => setMode('system')}
      >
        system
      </ButtonComponent>
    </header>
  );
};
