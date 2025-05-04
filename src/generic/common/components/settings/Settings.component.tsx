import { useSettings, useSettingsDispatch } from '@/src/generic/common/components/settings/useSettings.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import styles from '@/src/generic/common/components/settings/Settings.module.scss';

export const SettingsComponent = ({ open }: { open: boolean }) => {
  const settings = useSettings();
  const setSettings = useSettingsDispatch();

  return (
    <div className={styles.settings}>
      <div className={styles.option}>
        <span className={styles.label}>Language</span>
        <div className={styles.buttons}>
          <ButtonComponent
            className={styles.button}
            tabIndex={!open ? -1 : 0}
            onClick={() => setSettings({ ...settings, language: 'en' })}
          >
            EN
          </ButtonComponent>
          <ButtonComponent
            className={styles.button}
            tabIndex={!open ? -1 : 0}
            onClick={() => setSettings({ ...settings, language: 'fr' })}
          >
            FR
          </ButtonComponent>
        </div>
      </div>
      <div className={styles.option}>
        <span className={styles.label}>Theme</span>
        <div className={styles.buttons}>
          <ButtonComponent
            className={styles.button}
            tabIndex={!open ? -1 : 0}
            onClick={() => setSettings({ ...settings, theme: 'classic' })}
          >
            classic
          </ButtonComponent>
          <ButtonComponent
            className={styles.button}
            tabIndex={!open ? -1 : 0}
            onClick={() => setSettings({ ...settings, theme: 'clubbed-to-death' })}
          >
            Clubbed to Death
          </ButtonComponent>
        </div>
      </div>
      <div className={styles.option}>
        <span className={styles.label}>Mode</span>
        <div className={styles.buttons}>
          <ButtonComponent
            className={styles.button}
            tabIndex={!open ? -1 : 0}
            onClick={() => setSettings({ ...settings, mode: 'dark' })}
          >
            Dark
          </ButtonComponent>
          <ButtonComponent
            className={styles.button}
            tabIndex={!open ? -1 : 0}
            onClick={() => setSettings({ ...settings, mode: 'light' })}
          >
            Light
          </ButtonComponent>
          <ButtonComponent
            className={styles.button}
            tabIndex={!open ? -1 : 0}
            onClick={() => setSettings({ ...settings, mode: 'system' })}
          >
            System
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};
