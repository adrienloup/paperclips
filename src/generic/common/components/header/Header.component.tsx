import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/src/generic/i18n/useLanguage.ts';
import { useMode } from '@/src/generic/mode/useMode.ts';
import { useHeader } from '@/src/generic/common/components/header/useHeader.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { NavigationComponent } from '@/src/generic/common/components/navigation/Navigation.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import styles from '@/src/generic/common/components/header/Header.module.scss';

export const HeaderComponent = React.memo(() => {
  const { t } = useTranslation();
  const [, setLanguage] = useLanguage();
  const [, setMode] = useMode();
  const [open, setOpen] = useHeader();

  useEffect(() => {
    const onKeyDown = (e: { keyCode: number }) => {
      if (e.keyCode === 27 && open) setOpen(false);
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
          <ButtonComponent onClick={() => setLanguage('en')}>EN</ButtonComponent>
          <ButtonComponent onClick={() => setLanguage('fr')}>FR</ButtonComponent>
          <ButtonComponent onClick={() => setMode('dark')}>dark</ButtonComponent>
          <ButtonComponent onClick={() => setMode('light')}>light</ButtonComponent>
          <ButtonComponent onClick={() => setMode('system')}>system</ButtonComponent>
          <ButtonComponent
            className={styles.button}
            aria-label={open ? t('common.menu.close') : t('common.menu.open')}
            onClick={() => setOpen(!open)}
          >
            <IconComponent icon={open ? 'menu_open' : 'menu'} />
          </ButtonComponent>
        </div>
      </div>
    </header>
  );
});
