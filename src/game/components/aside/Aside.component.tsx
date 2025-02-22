import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAside } from '@/src/game/components/aside/repository/useAside';
import { classNames } from '@/src/generic/utils/classNames';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component';
import styles from '@/src/game/components/aside/Aside.module.scss';

export const AsideComponent = () => {
  const { t } = useTranslation();
  const asideContext = useAside();
  const [open, setOpen] = asideContext!;

  useEffect(() => {
    const onKeyDown = (e: { keyCode: number }) => {
      if (e.keyCode === 27 && open) setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <aside
      className={classNames([styles.aside, open ? styles.open : ''])}
      role="complementary"
    >
      <div className={styles.inside}>
        <div className={styles.inner}>
          <div>aside</div>
          <ButtonComponent
            className={styles.button}
            aria-label={open ? t('common.aside.close') : t('common.aside.open')}
            onClick={() => setOpen(!open)}
          >
            <IconComponent icon={open ? 'arrow_menu_open' : 'notifications'} />
          </ButtonComponent>
        </div>
      </div>
    </aside>
  );
};
