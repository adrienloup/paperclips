import { Main } from './Main.type';
import styles from './Main.module.scss';

export const MainComponent = ({ children }: Main) => {
  return (
    <main className={styles.main} role="main">
      {children}
    </main>
  );
};
