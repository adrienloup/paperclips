import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/src/generic/i18n/useLanguage';
import { useTheme } from '@/src/generic/theme/useTheme';
import { useHeader } from '@/src/generic/common/components/header/useHeader';
import { classNames } from '@/src/generic/utils/classNames';
import { NavigationComponent } from '@/src/generic/common/components/navigation/Navigation.component';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component';
import styles from '@/src/generic/common/components/header/Header.module.scss';

export const HeaderComponent = () => {
  const { t } = useTranslation();
  const { setLanguage } = useLanguage();
  const { setTheme } = useTheme();
  const { header, setHeader } = useHeader();

  useEffect(() => {
    const onKeyDown = (e: { keyCode: number }) => {
      if (e.keyCode === 27 && header) setHeader(false); //setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [header]);

  return (
    <header
      className={classNames([styles.header, header ? styles.open : ''])}
      role="banner"
    >
      <div className={styles.inside}>
        <div className={styles.inner}>
          <NavigationComponent />
          <button onClick={() => setLanguage('en')}>EN</button>
          <button onClick={() => setLanguage('fr')}>FR</button>
          <br />
          <button onClick={() => setTheme('dark')}>dark</button>
          <button onClick={() => setTheme('light')}>light</button>
          <button onClick={() => setTheme('system')}>system</button>
          <ButtonComponent
            className={styles.button}
            aria-label={header ? t('common.settings.close') : t('common.settings.open')}
            onClick={() => setHeader(!header)}
          >
            <IconComponent icon={header ? 'arrow_menu_open' : 'arrow_menu_close'} />
          </ButtonComponent>
        </div>
      </div>
    </header>
  );
};
