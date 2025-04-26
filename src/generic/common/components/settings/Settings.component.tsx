import { useLanguage } from '@/src/generic/i18n/useLanguage.ts';
import { useTheme } from '@/src/generic/theme/useTheme.ts';
import { useMode } from '@/src/generic/mode/useMode.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import styles from '@/src/generic/common/components/settings/Settings.module.scss';

export const SettingsComponent = () => {
  const [, setLanguage] = useLanguage();
  const [, setTheme] = useTheme();
  const [, setMode] = useMode();

  return (
    <div className={styles.settings}>
      <div className={styles.option}>
        Language
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
      </div>
      <div className={styles.option}>
        Theme
        <ButtonComponent
          className={styles.button}
          onClick={() => setTheme('classic')}
        >
          classic
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={() => setTheme('clubbed-to-death')}
        >
          Clubbed to Death
        </ButtonComponent>
      </div>
      <div className={styles.option}>
        Mode
        <ButtonComponent
          className={styles.button}
          onClick={() => setMode('dark')}
        >
          Dark
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={() => setMode('light')}
        >
          Light
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={() => setMode('system')}
        >
          System
        </ButtonComponent>
      </div>
    </div>
  );
};
