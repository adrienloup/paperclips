import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMenu } from '@/src/generic/common/components/menu/useMenu.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { NavigationComponent } from '@/src/generic/common/components/navigation/Navigation.component.tsx';
import { SettingsComponent } from '@/src/generic/common/components/settings/Settings.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
// import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import styles from '@/src/generic/common/components/menu/Menu.module.scss';

export const MenuComponent = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useMenu();

  const onMenuClick = () => setOpen(!open);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div
      id="menu"
      className={classNames([styles.menu, open ? styles.open : ''])}
      role="menu"
      aria-labelledby="menubutton"
    >
      <ButtonComponent
        id="menubutton"
        className={styles.button}
        aria-label={open ? t('common.menu.close') : t('common.menu.open')}
        aria-expanded={open}
        aria-controls="menu"
        onClick={onMenuClick}
      >
        <span className={styles.inner}>
          {/*<IconComponent icon={open ? 'arrow_menu_open' : 'arrow_menu_close'} />*/}
          menu
        </span>
      </ButtonComponent>
      <NavigationComponent />
      <SettingsComponent />
    </div>
  );
};
