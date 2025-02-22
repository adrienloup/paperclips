import { useEffect } from 'react';
import { useAside } from '@/src/generic/common/components/aside/repository/useAside';
import { classNames } from '@/src/generic/utils/classNames';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component';
import { Aside } from '@/src/generic/common/components/aside/Aside.type';
import styles from '@/src/generic/common/components/aside/Aside.module.scss';

export const AsideComponent = ({
  children,
  icon = 'arrow_menu_close',
  openLabel,
  closeLabel,
}: Aside) => {
  const asideContext = useAside();
  const [open, setOpen] = asideContext!;

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
    <aside
      className={classNames([styles.aside, open ? styles.open : ''])}
      role="complementary"
    >
      <div className={styles.inside}>
        <div className={styles.inner}>
          {children}
          <ButtonComponent
            className={styles.button}
            aria-label={open ? closeLabel : openLabel}
            onClick={() => setOpen(!open)}
          >
            <IconComponent icon={open ? 'arrow_menu_open' : icon} />
          </ButtonComponent>
        </div>
      </div>
    </aside>
  );
};
