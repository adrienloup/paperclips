import { Children } from '../../types/Children.type';
import styles from './Header.module.scss';

export const HeaderComponent = ({ children }: { children: Children }) => {
  return (
    <header className={styles.header} role="banner">
      {children}
    </header>
  );
};
