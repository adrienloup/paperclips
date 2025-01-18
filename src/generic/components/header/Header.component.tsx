import { useEffect, useState } from 'react';
import { classNames } from '../../utils/classNames';
import { ButtonComponent } from '../button/Button.component';
import { IconComponent } from '../icon/Icon.component';
import styles from './Header.module.scss';

export const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => setOpen(!open);

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
        <div className={styles.inner}>header</div>
      </div>
      <ButtonComponent
        className={styles.button}
        aria-label={open ? 'Fermer les paramètres' : 'Ouvrir les paramètres'}
        onClick={onClick}
      >
        <IconComponent icon={open ? 'arrow_menu_open' : 'arrow_menu_close'} />
      </ButtonComponent>
    </header>
  );
};
