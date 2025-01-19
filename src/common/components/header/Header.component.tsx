import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/src/generic/i18n/useLanguage';
import { useTheme } from '@/src/generic/theme/useTheme';
import { classNames } from '@/src/generic/utils/classNames';
import { ButtonComponent } from '@/src/common/components/button/Button.component';
import { IconComponent } from '@/src/common/components/icon/Icon.component';
import styles from '@/src/common/components/header/Header.module.scss';

export const HeaderComponent = () => {
  const { t } = useTranslation();
  const { setLanguage } = useLanguage();
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: { keyCode: number }) => {
      if (e.keyCode === 27 && open) setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className={classNames([styles.header, open ? styles.open : ''])} role="banner">
      <div className={styles.inside}>
        <div className={styles.inner}>
          header
          <button onClick={() => setLanguage('en')}>EN</button>
          <button onClick={() => setLanguage('fr')}>FR</button>
          <br />
          <button onClick={() => setTheme('dark')}>dark</button>
          <button onClick={() => setTheme('light')}>light</button>
          <button onClick={() => setTheme('system')}>system</button>
        </div>
      </div>
      <ButtonComponent
        className={styles.button}
        aria-label={open ? t('common.settings.close') : t('common.settings.open')}
        onClick={() => setOpen(!open)}
      >
        <IconComponent icon={open ? 'arrow_menu_open' : 'arrow_menu_close'} />
      </ButtonComponent>
    </header>
  );
};
