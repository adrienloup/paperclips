import { useState } from 'react';
import { classNames } from '../../utils/classNames';
import styles from './Header.module.scss';

export const HeaderComponent = () => {
  const [opened, setOpen] = useState(false);

  return (
    <header
      className={classNames([styles.header, opened ? styles.opened : ''])}
      role="banner"
    >
      <div className={styles.inside}>
        <div className={styles.inner}>insideinsideinside</div>
      </div>
      <button onClick={() => setOpen(!opened)}>open</button>
    </header>
  );
};
