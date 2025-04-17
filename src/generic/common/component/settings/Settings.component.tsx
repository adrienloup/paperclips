import { useLanguage } from '@/src/generic/i18n/useLanguage.ts';
import { useMode } from '@/src/generic/mode/useMode.ts';
import { ButtonComponent } from '@/src/generic/common/component/button/Button.component.tsx';
import styles from '@/src/generic/common/component/settings/Settings.module.scss';

export const SettingsComponent = () => {
  const [, setLanguage] = useLanguage();
  const [, setMode] = useMode();

  return (
    <div className={styles.settings}>
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
    </div>
  );
};
