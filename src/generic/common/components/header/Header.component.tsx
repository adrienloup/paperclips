import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/src/generic/i18n/useLanguage';
import { useTheme } from '@/src/generic/theme/useTheme';
import { useHeader } from '@/src/generic/common/components/header/repository/useHeader';
import { classNames } from '@/src/generic/utils/classNames';
import { NavigationComponent } from '@/src/generic/common/components/navigation/Navigation.component';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component';
import styles from '@/src/generic/common/components/header/Header.module.scss';

export const HeaderComponent = () => {
  const { t } = useTranslation();
  const [, setLanguage] = useLanguage();
  const [, setTheme] = useTheme();
  const [open, setOpen] = useHeader();

  useEffect(() => {
    const onKeyDown = (e: { keyCode: number }) => {
      if (e.keyCode === 27 && open) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header
      className={classNames([styles.header, open ? styles.open : ''])}
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
            aria-label={open ? t('common.menu.close') : t('common.menu.open')}
            onClick={() => setOpen(!open)}
          >
            <IconComponent icon={open ? 'arrow_menu_close' : 'menu'} />
          </ButtonComponent>
        </div>
      </div>
    </header>
  );
};
