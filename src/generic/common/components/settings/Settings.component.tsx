import { useLanguage } from '@/src/generic/i18n/useLanguage.ts';
import { useMode } from '@/src/generic/mode/useMode.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import styles from '@/src/generic/common/components/settings/Settings.module.scss';

export const SettingsComponent = () => {
  const [, setLanguage] = useLanguage();
  const [, setMode] = useMode();

  return (
    <div className={styles.settings}>
      <ButtonComponent onClick={() => setLanguage('en')}>EN</ButtonComponent>
      <ButtonComponent onClick={() => setLanguage('fr')}>FR</ButtonComponent>
      <ButtonComponent onClick={() => setMode('dark')}>dark</ButtonComponent>
      <ButtonComponent onClick={() => setMode('light')}>light</ButtonComponent>
      <ButtonComponent onClick={() => setMode('system')}>system</ButtonComponent>
    </div>
  );
};
