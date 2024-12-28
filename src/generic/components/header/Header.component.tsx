import { useState } from 'react';
import { classNames } from '../../utils/classNames';
import { ButtonComponent } from '../button/Button.component';
import { IconComponent } from '../icon/Icon.component';
import styles from './Header.module.scss';

export const HeaderComponent = () => {
  const [opened, setOpen] = useState(false);

  return (
    <header
      className={classNames([styles.header, opened ? styles.opened : ''])}
      role="banner"
    >
      <div className={styles.inside}>
        <div className={styles.inner}>header</div>
      </div>
      <ButtonComponent
        className={styles.button}
        onClick={() => setOpen(!opened)}
      >
        <IconComponent icon="tune" />
      </ButtonComponent>
    </header>
  );
};
