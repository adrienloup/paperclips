import { Children } from '../../types/Children.type';
import styles from './Main.module.scss';

export const MainComponent = ({ children }: { children: Children }) => {
  return (
    <main className={styles.main} role="main">
      {children}
    </main>
  );
};
